import React from 'react';
import Home from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from './src/screens/News';
import SingIn from './src/screens/SingIn';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="SignIn" component={SingIn} />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
