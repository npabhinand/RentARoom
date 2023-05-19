import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";
import Profile from "./components/Profile";
import OwnerHome from "./components/OwnerHome";
import MainPage from "./components/MainPage";
import HousePage from "./components/HousePage";
import HostelPage from "./components/HostelPage";
import HouseDetails from "./components/HouseDetails";
import AddProperty from "./components/AddProperty";
import ViewProperty from "./components/ViewProperty";
import Applications from "./components/Applications";
import Payment from "./components/Payment";
import Edit from "./components/Edit";
import Inmates from "./components/Inmates";
import Dues from "./components/Dues";
import StudentDetails from "./components/StudentDetails";
import Feedback from "./components/Feedback";
import RoomPage from "./components/RoomPage";

const Stack = createNativeStackNavigator();
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "RentARoom",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "RentARoom",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerBackVisible: false, 
          }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "RentARoom",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerBackVisible: false, 
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen name="OwnerHome" component={OwnerHome} />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: "Properties",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="HousePage"
          component={HousePage}
          options={{
            title: "Houses",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="RoomPage"
          component={RoomPage}
          options={{
            title: "Rooms",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="HostelPage"
          component={HostelPage}
          options={{
            title: "Hostels",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "100",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="HouseDetails"
          component={HouseDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="AddProperty" component={AddProperty} />
        <Stack.Screen name="ViewProperty" component={ViewProperty} />
        <Stack.Screen name="Applications" component={Applications} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen
          name="Inmates"
          component={Inmates}
          options={{ title: "Inmates" }}
        />
        <Stack.Screen name="Dues" component={Dues} />
        <Stack.Screen name="StudentDetails" component={StudentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
