import { View, Text, StyleSheet } from "react-native";

export default function MealTag({
  affordability,
  duration,
  complexity,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.detail, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability?.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
