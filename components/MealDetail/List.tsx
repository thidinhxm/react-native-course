import { StyleSheet, Text, View } from "react-native";

interface Props {
  data: string[];
}
function List({ data }: Props) {
  return (
    <>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.item}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
} 

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e3b497',
  },
  item: {
    color: '#451401',
    textAlign: 'center',
  }
})