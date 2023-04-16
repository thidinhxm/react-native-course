import { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

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
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  }
})