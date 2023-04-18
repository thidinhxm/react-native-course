import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'

interface Props {
  duration: number;
  complexity: string;
  affordability: string;
  style?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

function MealDetails({duration, complexity, affordability, style, textStyle} : Props) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})