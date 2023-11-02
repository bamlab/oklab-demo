import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './components/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}
