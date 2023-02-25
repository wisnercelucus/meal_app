import { View, StyleSheet, Text } from "react-native";

export default function List({ data }) {
  return data.map((d) => {
    return (
      <View style={styles.listItem} key={d}>
        <Text style={styles.itemText}>{d}</Text>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  text: {
    itemText: "#351401",
    textAlign: "center",
  },
});
