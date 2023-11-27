import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainPage } from './pages/MainPage';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainPage />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
