import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../colors';
import { RgbColor } from '../domain/RgbColor';
import { ColorPicker } from './ColorPicker';

type Props = {
  initialColor: RgbColor;
  isVisible: boolean;
  onColorSelected: (color: RgbColor) => void;
};

export const ColorPickerModal = ({
  isVisible,
  initialColor,
  onColorSelected,
}: Props) => {
  const [color, setColor] = useState(initialColor);
  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  if (!isVisible) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ColorPicker selectedColor={color} onColorSelected={setColor} />
        <TouchableOpacity
          onPress={() => {
            onColorSelected(color);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Select ✅</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.backgroundColor,
    position: 'absolute',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 32,
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
