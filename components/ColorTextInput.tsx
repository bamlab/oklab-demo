import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../colors';
import { RgbColor } from '../domain/RgbColor';
import {
  fromHexString,
  isValidHexColor,
  toHexString,
} from '../utils/colorConversions';

type Props = {
  color: RgbColor;
  setColor: (color: RgbColor) => void;
};

export const ColorTextInput = ({ color, setColor }: Props) => {
  const [localColor, setLocalColor] = useState(toHexString(color));
  const isValid = isValidHexColor(localColor);

  useEffect(() => {
    setLocalColor(toHexString(color));
  }, [color]);

  return (
    <View style={styles.container}>
      <TextInput
        value={localColor}
        onChangeText={(text) => {
          setLocalColor(text);
        }}
        style={styles.colorLabel}
      />
      <TouchableOpacity
        onPress={() => {
          setColor(fromHexString(localColor));
        }}
        disabled={!isValid}
        style={[
          styles.validateButton,
          { backgroundColor: isValid ? 'green' : 'gray' },
        ]}
      >
        <Text style={styles.validateButtonLabel}>🔄</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 4,
  },
  colorLabel: {
    flex: 1,
    backgroundColor: colors.defaultChipBackgroundColor,
    padding: 12,
    borderRadius: 12,
    color: colors.defaultChipLabelColor,
    fontWeight: '500',
    textAlign: 'center',
  },
  validateButton: {
    padding: 12,
    justifyContent: 'center',
    borderRadius: 12,
  },
  validateButtonLabel: {
    color: 'white',
  },
});
