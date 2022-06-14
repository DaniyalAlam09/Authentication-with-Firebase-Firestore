import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Componets/Home';
import Login from './Componets/Login';
import Signup from './Componets/Signup';
import WelCome from './Componets/WelCome';
import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
   const Stack = createNativeStackNavigator();

  return (
    <>
     <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="WelCome" component={WelCome} />

      </Stack.Navigator>
    </NavigationContainer> 
  
    </>
  );
}

