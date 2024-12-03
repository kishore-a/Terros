import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import ChessBoard from './app/game';
import HomePage from './app/home';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
          <View className='flex-1 justify-center items-center'>
        {/* <HomePage/> */}
        <ChessBoard/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
