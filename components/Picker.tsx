import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
        <Text style={styles.chipLabel}>{item}</Text>
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
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
  },
  defaultChip: {
    backgroundColor: 'gray',
    padding: 8,
    borderRadius: 8,
  },
  chipLabel: {
    color: 'white',
  },
});
