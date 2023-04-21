import { 
  StyleSheet, 
  Text,
  TextInputProps,
  View,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../constants/styles';

type Props = {
  label: string,
  textInputProps: TextInputProps,
  style?: StyleProp<ViewStyle>,
  invalid: boolean
}

function Input({ label, textInputProps, style, invalid }: Props) {

  let inputStyles = [styles.input] as StyleProp<TextStyle>[];
  if (textInputProps.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputProps}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  }
});