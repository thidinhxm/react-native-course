import { ReactNode } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface Props {
  children: ReactNode
}
function Title({ children } : Props) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 1,
    borderWidth: Platform.select({android: 2, ios: 1}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  }
})