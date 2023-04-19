import { FlatList, StyleSheet, View } from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface Props {
  items: Meal[];
}
function MealsList({ items } : Props) {
  function renderMealItem(meal: Meal) {
    return <MealItem {...meal}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
} 

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});