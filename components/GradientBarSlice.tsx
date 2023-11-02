import { StyleSheet, View } from 'react-native';
import { RgbColor } from '../domain/RgbColor';

type Props = {
  color: RgbColor;
};

export const GradientBarSlice = ({ color }: Props) => (
  <View
    style={[
      styles.container,
      { backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` },
    ]}
  ></View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
