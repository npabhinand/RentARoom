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
import AddProperty from './components/AddProperty'
import ViewProperty from './components/ViewProperty';
import Applications from './components/Applications';
import Payment from './components/Payment';
import Edit from './components/Edit'
import Inmates from './components/Inmates'

const Stack = createNativeStackNavigator();
export default function App() {
  
        // const [initializing, setInitializing] = useState(true);
        // const [user, setUser] = useState()

        // function onAuthStateChanged(user){
        //   setUser(user);
        //   if(initializing) setInitializing(false)
        // }
        //   useEffect(() => {
        //     const subsciber= firebase.auth().onAuthStateChanged(onAuthStateChanged);
        //     return subscriber;

        //   }, [third])
          
        //     if(initializing) return null;

        //     if(!user){

           
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OwnerHome'>
      <Stack.Screen name="Login"  component={Login} />
      <Stack.Screen name="SignUp" options={{title:"Are you ready?"}} component={SignUp} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Notification" component={Notification}/>
      <Stack.Screen name='OwnerHome' component={OwnerHome}/>
      <Stack.Screen name='MainPage' component={MainPage}/>
      <Stack.Screen name="HouseDetails"  component={HouseDetails} 
      // options={{headerShown: false}}

      />
      <Stack.Screen name="Cards" component={Cards}/>
      <Stack.Screen name="AddProperty" component={AddProperty}/>
      <Stack.Screen name="ViewProperty" component={ViewProperty}/>
      <Stack.Screen name="Applications" component={Applications}/>
      <Stack.Screen name="Payment" component={Payment}/>
      <Stack.Screen name="Edit" component={Edit}/>
      <Stack.Screen name="Inmates" component={Inmates} options={{title:"Inmates"}}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
            }
          // }
