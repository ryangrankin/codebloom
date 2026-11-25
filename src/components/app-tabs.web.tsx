import { Stack, usePathname, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function AppTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {
      label: "Home",
      route: "/" as const,
      icon: require("@/assets/images/tabIcons/home.png"),
    },
    {
      label: "Explore",
      route: "/explore" as const,
      icon: require("@/assets/images/tabIcons/explore.png"),
    },
    {
      label: "Learn",
      route: "/learn" as const,
      icon: require("@/assets/images/tabIcons/explore.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="explore" />
          <Stack.Screen name="learn" />
          <Stack.Screen name="lesson" />
        </Stack>
      </View>

      {pathname !== "/lesson" && (
        <View style={styles.navbar}>
          {tabs.map((tab) => {
            const active = pathname === tab.route;

            return (
              <Pressable
                key={tab.route}
                accessibilityRole="button"
                onPress={() => router.navigate(tab.route)}
                style={[
                  styles.tab,
                  active && styles.activeTab,
                ]}
              >
                <Image
                  source={tab.icon}
                  style={[
                    styles.icon,
                    active && styles.activeIcon,
                  ]}
                />

                <Text
                  style={[
                    styles.label,
                    active && styles.activeLabel,
                  ]}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9FD",
  },

  content: {
    flex: 1,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E9DDF8",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  tab: {
    flex: 1,
    maxWidth: 180,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 14,
    gap: 5,
  },

  activeTab: {
    backgroundColor: "#F3EAFF",
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: "#847A91",
  },

  activeIcon: {
    tintColor: "#9162E4",
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#847A91",
  },

  activeLabel: {
    color: "#9162E4",
  },
});
