import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Screen from './src/screen/Screen';


export default function App() {
  return (
    <SafeAreaView>
    <View>
    <Screen/>
    </View>
    </SafeAreaView>
    // </SafeAreaView>
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
