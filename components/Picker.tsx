import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors';

type Props<T extends string> = {
  items: readonly T[];
  selectedItem: T;
  onItemSelected: (item: T) => void;
};

export const Picker = <T extends string>({
  items,
  selectedItem,
  onItemSelected,
}: Props<T>) => (
  <ScrollView
    contentContainerStyle={styles.container}
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    {items.map((item) => (
      <TouchableOpacity
        style={item === selectedItem ? styles.selectedChip : styles.defaultChip}
        onPress={() => {
          onItemSelected(item);
        }}
        key={item}
      >
        <Text
          style={
            item === selectedItem
              ? styles.selectedChipLabel
              : styles.defaultChipLabel
          }
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 16,
  },
  selectedChip: {
    backgroundColor: colors.selectedChipBackgroundColor,
    padding: 8,
    borderRadius: 8,
  },
  defaultChip: {
    backgroundColor: colors.defaultChipBackgroundColor,
    padding: 8,
    borderRadius: 8,
  },
  selectedChipLabel: {
    color: colors.selectedChipLabelColor,
  },
  defaultChipLabel: {
    color: colors.defaultChipLabelColor,
  },
});
