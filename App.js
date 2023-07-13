import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <WebView
      style={styles.container}
      source={{ uri: 'https://hichatgpt.info' }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
