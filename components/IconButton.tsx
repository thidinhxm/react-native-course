import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  icon: string;
  color: string;
  onPress: () => void;
};

function IconButton({ icon, color, onPress }: Props) {
  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Icon name={icon} size={24} color={color}/>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
});