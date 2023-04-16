import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import Colors from "../../constants/colors";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
function InstructionText({ children, style }: Props) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.accent500,
    fontSize: 24,
  },
});