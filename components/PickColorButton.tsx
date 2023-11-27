import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors';
import { RgbColor } from '../domain/RgbColor';
import { ColorUse } from '../pages/MainPage';
import { toHexString } from '../utils/colorConversions';
import { RootStackParamList } from './RootNavigator';

type Props = {
  color: RgbColor;
  use: ColorUse;
};

export const PickColorButton = ({ color, use }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('ColorPicker', { initialColor: color, use });
      }}
      style={[styles.container, { backgroundColor: toHexString(color) }]}
    >
      <Text style={styles.label}>🎨</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
  },
  label: {
    color: colors.addButtonLabelColor,
  },
});
