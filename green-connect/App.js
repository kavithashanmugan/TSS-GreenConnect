import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen  from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>nto start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <HomeScreen/>  */}
      <WelcomeScreen/>
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
