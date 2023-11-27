import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorPicker } from '../components/ColorPicker';
import { RootStackParamList } from '../components/RootNavigator';
import { RgbColor } from '../domain/RgbColor';

export type ColorPickerPageParams = {
  initialColor: RgbColor;
};

export const ColorPickerPage = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ColorPicker'>>();
  const [color, setColor] = useState(params.initialColor);

  return (
    <SafeAreaView style={styles.container}>
      <ColorPicker selectedColor={color} onColorSelected={setColor} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
