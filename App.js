import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  SignUp from './components/SignUp'
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
import Home from './components/Home';
import Profile from './components/Profile';
import Notification from './components/Notification';
import OwnerHome from './components/OwnerHome';
import MainPage from './components/MainPage';
import HouseDetails from './components/HouseDetails';
import Cards from './components/Cards';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login"  component={Login} />
      <Stack.Screen name="SignUp" options={{title:"Are you ready?"}} component={SignUp} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Notification" component={Notification}/>
      <Stack.Screen name='OwnerHome' component={OwnerHome}/>
      <Stack.Screen name='MainPage' component={MainPage}/>
      <Stack.Screen name="HouseDetails" component={HouseDetails}/>
      <Stack.Screen name="Cards" component={Cards}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}
