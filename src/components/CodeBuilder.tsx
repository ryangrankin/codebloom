
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
  blocks: string[];
  selectedOrder: number[];
  onChange: (order: number[]) => void;
  disabled?: boolean;
};

export default function CodeBuilder({
  blocks,
  selectedOrder,
  onChange,
  disabled = false,
}: Props) {
  const availableBlocks = blocks
    .map((block, index) => ({ block, index }))
    .filter(({ index }) => !selectedOrder.includes(index));

  function addBlock(index: number) {
    if (disabled) return;
    onChange([...selectedOrder, index]);
  }

  function removeBlock(index: number) {
    if (disabled) return;
    onChange(selectedOrder.filter((value) => value !== index));
  }

  function moveBlock(position: number, direction: -1 | 1) {
    if (disabled) return;

    const target = position + direction;

    if (target < 0 || target >= selectedOrder.length) {
      return;
    }

    const updated = [...selectedOrder];

    [updated[position], updated[target]] = [
      updated[target],
      updated[position],
    ];

    onChange(updated);
  }

  return (
    <View>
      <Text style={styles.label}>YOUR CODE</Text>

      <View style={styles.editor}>
        {selectedOrder.length === 0 ? (
          <Text style={styles.placeholder}>
            Tap the blocks below to build your code.
          </Text>
        ) : (
          selectedOrder.map((index, position) => (
            <View key={index} style={styles.selectedBlock}>
              <Text style={styles.lineNumber}>
                {position + 1}
              </Text>

              <Text style={styles.code}>
                {blocks[index]}
              </Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  disabled={disabled || position === 0}
                  onPress={() => moveBlock(position, -1)}
                >
                  <Text style={styles.action}>↑</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={
                    disabled ||
                    position === selectedOrder.length - 1
                  }
                  onPress={() => moveBlock(position, 1)}
                >
                  <Text style={styles.action}>↓</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={disabled}
                  onPress={() => removeBlock(index)}
                >
                  <Text style={styles.remove}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>

      <Text style={styles.label}>AVAILABLE BLOCKS</Text>

      {availableBlocks.map(({ block, index }) => (
        <TouchableOpacity
          key={index}
          style={styles.availableBlock}
          disabled={disabled}
          onPress={() => addBlock(index)}
        >
          <Text style={styles.availableText}>
            + {block}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: "800",
    color: "#9162E4",
    marginBottom: 12,
    marginTop: 14,
    letterSpacing: 1,
  },
  editor: {
    backgroundColor: "#242033",
    borderRadius: 16,
    padding: 14,
    minHeight: 120,
    marginBottom: 20,
  },
  placeholder: {
    color: "#C8B9FA",
    fontSize: 14,
    lineHeight: 22,
  },
  selectedBlock: {
    backgroundColor: "#393349",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  lineNumber: {
    color: "#C8B9FA",
    marginRight: 10,
    fontSize: 12,
  },
  code: {
    color: "#FFFFFF",
    fontFamily: "monospace",
    fontSize: 12,
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginLeft: 8,
  },
  action: {
    color: "#C8B9FA",
    fontSize: 20,
    fontWeight: "700",
  },
  remove: {
    color: "#FF9A9A",
    fontSize: 18,
    fontWeight: "700",
  },
  availableBlock: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E9DDF8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  availableText: {
    color: "#392653",
    fontFamily: "monospace",
    fontSize: 13,
  },
});
