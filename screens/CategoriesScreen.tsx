import { CATEGORIES } from '../data/dummy-data';
import { View, FlatList, StyleSheet } from 'react-native';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;

function CategoriesScreen({ navigation }: Props) {
  function renderCategoryItem(item: Category) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };
  
    return (
      <CategoryGridTile 
        title={item.title} 
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderCategoryItem(itemData.item)}
        numColumns={2}
        // key={2}
      />
    </View>
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: '#24180f',
  }
})