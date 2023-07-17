import { registerRootComponent } from 'expo';
import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet,SafeAreaView} from 'react-native';


export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <WebView
      style={styles.container}
      source={{ uri: 'https://hichatgpt.info' }}
    />
	</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
registerRootComponent(App); 