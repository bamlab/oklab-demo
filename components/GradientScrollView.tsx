import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientParams } from '../domain/GradientParams';
import { GradientShowcase } from './GradientShowcase';

type Props = {
  gradientParamsList: GradientParams[];
  setGradientParamsList: (
    set: (currentList: GradientParams[]) => GradientParams[],
  ) => void;
};

export const GradientScrollView = ({
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
