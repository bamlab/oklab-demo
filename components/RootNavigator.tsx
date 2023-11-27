import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ColorPickerPage,
  ColorPickerPageParams,
} from '../pages/ColorPickerPage';
import { MainPage } from '../pages/MainPage';

export type RootStackParamList = {
  Main: undefined;
  ColorPicker: ColorPickerPageParams;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName="Main"
    screenOptions={{ headerShown: false }}
  >
    <RootStack.Screen name="Main" component={MainPage} />
    <RootStack.Screen name="ColorPicker" component={ColorPickerPage} />
  </RootStack.Navigator>
);
