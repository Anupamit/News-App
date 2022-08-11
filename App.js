import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import WebViewDetail from './src/Components/WebViewDetail';
import GetNews from './src/screens/GetNews';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending News" component={Home} />
        <Stack.Screen name="GetNews" component={GetNews} />
        <Stack.Screen name="WebView" component={WebViewDetail} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;