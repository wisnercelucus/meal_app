import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealTag from "../components/MealsTags";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
export default function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootScreen}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <View>
        <MealTag
          affordability={meal.affordability}
          duration={meal.duration}
          complexity={meal.complexity}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    color: "white",
    margin: 8,
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
