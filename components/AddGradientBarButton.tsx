import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors';

type Props = {
  onPress: () => void;
};

export const AddGradientBarButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.label}>Add a gradient bar</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: colors.addButtonBackgroundColor,
  },
  label: {
    color: colors.addButtonLabelColor,
    fontWeight: '600',
  },
});
