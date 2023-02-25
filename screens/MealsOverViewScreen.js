import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const title = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({ title: title });
  }, [categoryId, navigation]);

  function pressHandler(id) {
    navigation.navigate("MealDetail", { mealId: id });
  }

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        onPress={pressHandler.bind(this, itemData.item.id)}
      />
    );
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={meals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
