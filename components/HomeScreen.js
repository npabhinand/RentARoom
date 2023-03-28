import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";
import profile from "./assets/menu.png";
// Tab ICons...
import home from "./assets/home.png";
import wishlist from "./assets/wishlist.png";
import notification from "./assets/bell.png";
import settings from "./assets/settings.png";
import logout from "./assets/logout.png";
// Menus
import menu from "./assets/menu.png";
import close from "./assets/close.png";

// Photo
import Notification from "./Notification";
import Home from "./Home";
import Wishlist from "./Wishlist"
import { auth } from "../firebase";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({navigation,route}) {




  const {userD }=route.params;
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const [searchText, setSearchText] = useState("");
const [hamburgerMenu, sethamburgerMenu] = useState(false);
const [input,setInput]=useState("");
const signOut = () => { 
  
  console.log("Signout called")
 auth.signOut().then(()=>navigation.navigate("Login")).catch((err)=>console.log(err)) }


  const HamburgerMenu = () => {



    return (
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          {userD.name}
        </Text>

        <TouchableOpacity>
          <Text onPress={()=>navigation.navigate("Profile",{userD})}
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, handleMenu, "Home", home)}
          {TabButton(currentTab, setCurrentTab, handleMenu, "Wishlist", wishlist)}
          {TabButton(currentTab, setCurrentTab, handleMenu,  "Notification", notification)}
          {TabButton(currentTab, setCurrentTab, handleMenu,  "Settings", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, signOut, "Logout", logout)}</View>
      </View>
    )
  }

  // const onSearch = () => {
  //   console.log(`Searching for ${searchText}`);
  // };


  const handleMenu = () => {
    {
      // Do Actions Here....
      // Scaling the view...
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.timing(offsetValue, {
        // YOur Random Value...
        toValue: showMenu ? 0 : 230,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.timing(closeButtonOffset, {
        // YOur Random Value...
        toValue: !showMenu ? -30 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      sethamburgerMenu(!hamburgerMenu)
      setShowMenu(!showMenu);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      { hamburgerMenu  ? <HamburgerMenu /> : null}
      
      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 10,
          paddingVertical:30,
          borderRadius: showMenu ? 15 : 0,
          // flexDirection:'row',
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ]
          }}
        >
      <View style={{ alignItems:'center', flexDirection:"row"}}>


      <TouchableOpacity
            onPress={() => handleMenu()}
            style={{width:40,height:35,backgroundColor:'#DEE1E9',alignItems:'flex-start',justifyContent:'center',borderRadius:10}}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginLeft:10,
              }}
            ></Image>
          </TouchableOpacity>

         
            {/* <TextInput
              style={{
                height: 50,
                width: "90%",
                margin: 0,
                padding: 10,
                borderRadius: 15,
                borderColor: "gray",
                borderWidth: 1,
                fontSize: 20,
                marginTop:10
              }}
              onChangeText={(text) => setSearchText(text)}
              value={searchText}
              // onPress={onSearch}
              placeholder="Search Here"
            /> */}
            

      </View>



{/* 
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
            }}
          >
         
          
          </Text> */}

   
        </Animated.View>


      


          { currentTab == "Home" ? <Home navigation={navigation} userD={userD} /> : null}
          { currentTab == "Notification" ? <Notification navigation={navigation} userD={userD} /> : null}
          { currentTab == "Wishlist" ? <Wishlist navigation={navigation} userD={userD} /> : null}
          
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, handleMenu, title,image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "Home")
        {
          // console.log("YSSSSSSS", title)
          // sethamburgerMenu(false);
          // setShowMenu(false);
          handleMenu();
          
        }
        if (title == "Logout") {
          handleMenu();
        
        }
          else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
