import { useRef, useState, type ComponentRef } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";


type NativeView = ComponentRef<typeof View>;
type Props = {
  blocks: string[];
  selectedOrder: number[];
  onChange: (order: number[]) => void;
  disabled?: boolean;
  onDragStateChange?: (dragging: boolean) => void;
};

type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type DragState = {
  index: number;
  x: number;
  y: number;
};

function getIndentation(lines: string[]) {
  let depth = 0;

  return lines.map((block) => {
    return block.split("\n").map((rawLine) => {
      const line = rawLine.trim();

      const closes =
        /^(}|end\b|endif\b|endfor\b|endwhile\b|endfunction\b|else\b)/i.test(line);

      if (closes) {
        depth = Math.max(0, depth - 1);
      }

      const indent = depth;

      const opens =
        /\{\s*$/.test(line) ||
        (
          /^(if|else|repeat|while|for|function)\b/i.test(line) &&
          !/[{};]/.test(line)
        );

      if (opens) {
        depth++;
      }

      return { line, indent };
    });
  });
}

function HighlightedCode({ code }: { code: string }) {
  const tokens = code.split(
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:int|float|double|char|bool|string|void|if|else|while|for|return|repeat|function|end|then|display|print|set|true|false|cout|cin|printf)\b|\b\d+(?:\.\d+)?\b)/gi
  );

  return (
    <Text style={styles.code}>
      {tokens.map((token, index) => {
        let color = "#F8F8F2";

        if (/^["']/.test(token)) {
          color = "#A6E3A1";
        } else if (/^\d/.test(token)) {
          color = "#FAB387";
        } else if (
          /^(int|float|double|char|bool|string|void)$/i.test(token)
        ) {
          color = "#89DCEB";
        } else if (
          /^(if|else|while|for|return|repeat|function|end|then|display|print|set|true|false|cout|cin|printf)$/i.test(token)
        ) {
          color = "#CBA6F7";
        }

        return (
          <Text key={index} style={{ color }}>
            {token}
          </Text>
        );
      })}
    </Text>
  );
}

export default function CodeBuilder({
  blocks,
  selectedOrder,
  onChange,
  disabled = false,
  onDragStateChange,
}: Props) {
  const rootRef = useRef<NativeView>(null);
const editorRef = useRef<NativeView>(null);
const bankRef = useRef<NativeView>(null);

const rowRefs = useRef<Record<number, NativeView | null>>({});

  const rootBounds = useRef<Bounds | null>(null);
  const editorBounds = useRef<Bounds | null>(null);
  const bankBounds = useRef<Bounds | null>(null);

  const rowBounds = useRef<Record<number, Bounds>>({});

  const [drag, setDrag] = useState<DragState | null>(null);
  const [hoverEditor, setHoverEditor] = useState(false);
  const [dropPosition, setDropPosition] = useState<number | null>(null);

  const availableBlocks = blocks
    .map((block, index) => ({ block, index }))
    .filter(({ index }) => !selectedOrder.includes(index));

  const formattedBlocks = getIndentation(
    selectedOrder.map((index) => blocks[index])
  );

function measure(
  view: NativeView | null,
  callback: (bounds: Bounds) => void
) {
  view?.measureInWindow((x, y, width, height) => {
    callback({ x, y, width, height });
  });
}

  function measureEverything() {
    measure(rootRef.current, (bounds) => {
      rootBounds.current = bounds;
    });

    measure(editorRef.current, (bounds) => {
      editorBounds.current = bounds;
    });

    measure(bankRef.current, (bounds) => {
      bankBounds.current = bounds;
    });

    selectedOrder.forEach((index) => {
      measure(rowRefs.current[index], (bounds) => {
        rowBounds.current[index] = bounds;
      });
    });
  }

  function isInside(
    bounds: Bounds | null,
    x: number,
    y: number
  ) {
    if (!bounds) return false;

    return (
      x >= bounds.x &&
      x <= bounds.x + bounds.width &&
      y >= bounds.y &&
      y <= bounds.y + bounds.height
    );
  }

  function getDropPosition(y: number, index: number) {
    const remaining = selectedOrder.filter(
      (value) => value !== index
    );

    for (let i = 0; i < remaining.length; i++) {
      const bounds = rowBounds.current[remaining[i]];

      if (bounds && y < bounds.y + bounds.height / 2) {
        return i;
      }
    }

    return remaining.length;
  }

  function startDrag(index: number, x: number, y: number) {
    if (disabled) return;

    measureEverything();
    onDragStateChange?.(true);
    setDrag({ index, x, y });
  }

  function updateDrag(index: number, x: number, y: number) {
    setDrag({ index, x, y });

    const inside = isInside(editorBounds.current, x, y);

    setHoverEditor(inside);
    setDropPosition(
      inside ? getDropPosition(y, index) : null
    );
  }

  function finishDrag(index: number, x: number, y: number) {
    if (isInside(editorBounds.current, x, y)) {
      const updated = selectedOrder.filter(
        (value) => value !== index
      );

      updated.splice(getDropPosition(y, index), 0, index);

      onChange(updated);
    } else if (isInside(bankBounds.current, x, y)) {
      onChange(
        selectedOrder.filter((value) => value !== index)
      );
    }
  }

  function clearDrag() {
    setDrag(null);
    setHoverEditor(false);
    setDropPosition(null);
    onDragStateChange?.(false);
  }

  function createGesture(index: number) {
    return Gesture.Pan()
      .enabled(!disabled)
      .activateAfterLongPress(180)
      .runOnJS(true)
      .onStart((event) => {
        startDrag(index, event.absoluteX, event.absoluteY);
      })
      .onUpdate((event) => {
        updateDrag(index, event.absoluteX, event.absoluteY);
      })
      .onEnd((event) => {
        finishDrag(index, event.absoluteX, event.absoluteY);
      })
      .onFinalize(() => {
        clearDrag();
      });
  }

  let lineNumber = 0;

  return (
    <View ref={rootRef} collapsable={false} style={styles.root}>
      <Text style={styles.label}>YOUR CODE</Text>

      <View
        ref={editorRef}
        collapsable={false}
        style={[
          styles.editor,
          hoverEditor && styles.activeEditor,
        ]}
      >
        <View style={styles.editorHeader}>
          <View style={styles.dots}>
            <View style={[styles.dot, { backgroundColor: "#F38BA8" }]} />
            <View style={[styles.dot, { backgroundColor: "#F9E2AF" }]} />
            <View style={[styles.dot, { backgroundColor: "#A6E3A1" }]} />
          </View>

          <Text style={styles.editorTitle}>
            CODEBLOOM EDITOR
          </Text>
        </View>

        {selectedOrder.length === 0 && (
          <View style={styles.emptyEditor}>
            <Text style={styles.emptyIcon}>↓</Text>

            <Text style={styles.placeholder}>
              Drag your first code block here
            </Text>
          </View>
        )}

        {selectedOrder.map((index, position) => {
          const lines = formattedBlocks[position];

          const remainingPosition = selectedOrder
            .filter((value) => value !== drag?.index)
            .indexOf(index);

          return (
            <View key={index}>
              {hoverEditor &&
                drag?.index !== index &&
                dropPosition === remainingPosition && (
                  <View style={styles.dropIndicator} />
                )}

              <GestureDetector gesture={createGesture(index)}>
                <View
                  ref={(view) => {
                    rowRefs.current[index] = view;
                  }}
                  collapsable={false}
                  style={[
                    styles.selectedBlock,
                    drag?.index === index && styles.dragging,
                  ]}
                >
                  <View style={styles.codeLines}>
                    {lines.map(({ line, indent }, i) => {
                      lineNumber++;

                      return (
                        <View key={i} style={styles.codeLine}>
                          <Text style={styles.lineNumber}>
                            {lineNumber}
                          </Text>

                          <View
                            style={[
                              styles.indentedCode,
                              {
                                paddingLeft:
                                  Math.min(indent, 6) * 18,
                              },
                            ]}
                          >
                            {indent > 0 && (
                              <View style={styles.indentGuide} />
                            )}

                            <HighlightedCode code={line} />
                          </View>
                        </View>
                      );
                    })}
                  </View>

                  <Text style={styles.grip}>⠿</Text>
                </View>
              </GestureDetector>
            </View>
          );
        })}

        {hoverEditor &&
          dropPosition ===
            selectedOrder.filter(
              (value) => value !== drag?.index
            ).length && (
            <View style={styles.dropIndicator} />
          )}
      </View>

      <Text style={styles.label}>AVAILABLE BLOCKS</Text>

      <Text style={styles.instructions}>
        Hold and drag blocks to build your program.
      </Text>

      <View
        ref={bankRef}
        collapsable={false}
        style={styles.bank}
      >
        {availableBlocks.length === 0 && (
          <Text style={styles.bankPlaceholder}>
            All blocks placed. Drag blocks back here to remove them.
          </Text>
        )}

        {availableBlocks.map(({ block, index }) => (
          <GestureDetector
            key={index}
            gesture={createGesture(index)}
          >
            <View
              style={[
                styles.availableBlock,
                drag?.index === index && styles.dragging,
              ]}
            >
              <View style={styles.codeLines}>
                <HighlightedCode code={block} />
              </View>

              <Text style={styles.grip}>⠿</Text>
            </View>
          </GestureDetector>
        ))}
      </View>

      {drag && rootBounds.current && (
        <View
          pointerEvents="none"
          style={[
            styles.floatingBlock,
            {
              left: 8,
              right: 8,
              top: drag.y - rootBounds.current.y - 24,
            },
          ]}
        >
          <View style={styles.codeLines}>
            <HighlightedCode code={blocks[drag.index]} />
          </View>

          <Text style={styles.grip}>⠿</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    overflow: "visible",
  },

  label: {
    fontSize: 12,
    fontWeight: "800",
    color: "#9162E4",
    letterSpacing: 1.2,
    marginTop: 16,
    marginBottom: 12,
  },

  editor: {
    backgroundColor: "#1E1B2E",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#393349",
    padding: 10,
    minHeight: 160,
    marginBottom: 16,
  },

  activeEditor: {
    borderColor: "#A6E3A1",
  },

  editorHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    padding: 4,
  },

  dots: {
    flexDirection: "row",
    gap: 5,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },

  editorTitle: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#C8B9FA",
  },

  emptyEditor: {
    minHeight: 110,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#685779",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },

  emptyIcon: {
    fontSize: 28,
    color: "#C8B9FA",
    marginBottom: 6,
  },

  placeholder: {
    color: "#C8B9FA",
    fontSize: 12,
    textAlign: "center",
  },

  selectedBlock: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2D293F",
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 5,
  },

  codeLines: {
    flex: 1,
  },

  codeLine: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  lineNumber: {
    width: 22,
    color: "#827B99",
    fontSize: 11,
    lineHeight: 20,
  },

  indentedCode: {
    flex: 1,
    position: "relative",
  },

  indentGuide: {
    position: "absolute",
    left: 5,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: "#514963",
  },

  code: {
    color: "#F8F8F2",
    fontFamily: Platform.select({
      ios: "Menlo",
      android: "monospace",
      default: "monospace",
    }),
    fontSize: 12,
    lineHeight: 20,
  },

  grip: {
    color: "#B4A5D4",
    fontSize: 22,
    marginLeft: 6,
  },

  instructions: {
    color: "#847A91",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },

  bank: {
    minHeight: 65,
    padding: 6,
    backgroundColor: "#F3EAFF",
    borderRadius: 14,
  },

  bankPlaceholder: {
    color: "#847A91",
    fontSize: 12,
    textAlign: "center",
    padding: 12,
  },

  availableBlock: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#302940",
    borderWidth: 1,
    borderColor: "#514963",
    borderRadius: 10,
    padding: 13,
    marginBottom: 7,
  },

  dragging: {
    opacity: 0.25,
  },

  floatingBlock: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#514071",
    borderWidth: 2,
    borderColor: "#CBA6F7",
    borderRadius: 10,
    padding: 14,
    zIndex: 999,
    elevation: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  dropIndicator: {
    height: 3,
    borderRadius: 2,
    backgroundColor: "#A6E3A1",
    marginVertical: 4,
  },
});