import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
