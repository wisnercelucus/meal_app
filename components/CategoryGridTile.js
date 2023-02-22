import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS !== "android" ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white", //for shadow to work on ios
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonPressed: {
    opacity: 0.25,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
