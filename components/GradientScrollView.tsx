import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientParams } from '../domain/GradientParams';
import { RgbColor } from '../domain/RgbColor';
import { GradientShowcase } from './GradientShowcase';

type Props = {
  c1: RgbColor;
  c2: RgbColor;
  gradientParamsList: GradientParams[];
  setGradientParamsList: (
    set: (currentList: GradientParams[]) => GradientParams[],
  ) => void;
};

export const GradientScrollView = ({
  c1,
  c2,
  gradientParamsList,
  setGradientParamsList,
}: Props) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollView,
        { paddingBottom: 16 + bottom },
      ]}
    >
      {gradientParamsList.map((gradientParams, index) => (
        <GradientShowcase
          c1={c1}
          c2={c2}
          gradientParams={gradientParams}
          onRemovePress={() => {
            setGradientParamsList((currentList) => {
              const newList = currentList.slice();
              newList.splice(index, 1);
              return newList;
            });
          }}
          key={index}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
    gap: 16,
  },
});
