import { View, StyleSheet } from 'react-native';
import { RgbColor } from '../domain/RgbColor';

type Props = {
  color: RgbColor;
};

export const GradientBarSlice = ({ color }: Props) => (
  <View
    style={[
      styles.container,
      { backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` },
    ]}
  ></View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
