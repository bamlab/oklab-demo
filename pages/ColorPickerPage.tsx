import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colors';
import { ColorPicker } from '../components/ColorPicker';
import { RootStackParamList } from '../components/RootNavigator';
import { RgbColor } from '../domain/RgbColor';
import { ColorUse } from './MainPage';

export type ColorPickerPageParams = {
  initialColor: RgbColor;
  use: ColorUse;
};

export const ColorPickerPage = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ColorPicker'>>();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [color, setColor] = useState(params.initialColor);

  return (
    <SafeAreaView style={styles.container}>
      <ColorPicker selectedColor={color} onColorSelected={setColor} />
      <TouchableOpacity
        onPress={() => {
          navigate('Main', {
            startColor: params.use === 'start' ? color : undefined,
            endColor: params.use === 'end' ? color : undefined,
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>Select ✅</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  button: {
    backgroundColor: colors.addButtonBackgroundColor,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonLabel: {
    color: colors.addButtonLabelColor,
  },
});
