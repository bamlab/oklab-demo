import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainPage } from './pages/MainPage';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainPage />
    </SafeAreaProvider>
  );
}
