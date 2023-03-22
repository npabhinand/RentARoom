import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,TouchableOpacity
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Card,Avatar } from "@rneui/base";
import { auth } from "../firebase";

export default function Profile({route,navigation}) {
  const {userD }=route.params;
  // console.log(userD);
  const signOut = () => { 
  
    console.log("Signout called")
   auth.signOut().then(()=>navigation.navigate("Login")).catch((err)=>console.log(err)) }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Text style={styles.input}>Back</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("./assets/download.jpeg")}
              style={styles.image}
              // resizeMode="center"
            ></Image>
          </View>
          
          <View style={styles.dm}>
            <Ionicons
              name="ios-add"
              size={24}
              color="#DFD8C8"
              style={{ marginTop: 6, marginLeft: 2 }}
            ></Ionicons>
          </View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginLeft:30}}>
        <View>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 25 }]}>
            {userD.name}
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14,textAlign:'center' }]}>
          {userD.userType}
          </Text>
          </View>
          <View style={{marginLeft:30}}>
            <Text style={[styles.text, { fontSize: 25 }]}>place</Text>
            <Text style={[styles.text, styles.subText,{textAlign:'center'}]}>{userD.place}</Text>
          </View>
          <View style={{marginLeft:30}}>
            <Text style={[styles.text, { fontSize: 25 }]}>phone</Text>
            <Text style={[styles.text, styles.subText,{textAlign:'center'}]}>{userD.phone}</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          
          <View style={{ flexDirection: "row", justifyContent: 'space-around' ,marginBottom:20}}>
      <Card
          containerStyle={{
            marginTop: 15,
            width: '45%',
            height: 200,
            borderRadius: 20,
            backgroundColor: "#e5e5fe",
          }} 
        >
        <TouchableOpacity >
          <Avatar rounded source={require("./assets/edit.png")} />
         
          <Text style={{fontSize:20,padding:10,fontFamily:'serif',justifyContent:'center',textAlign:'center',marginTop:20}}>Edit Profile</Text>
          </TouchableOpacity>
        </Card>
     
     
     <Card
       containerStyle={{
         marginTop: 15,
         width: '45%',
         height: 200,
         borderRadius: 20,
         backgroundColor: "#FAE6D1",

         
       }}
     >
     <TouchableOpacity >
       <Avatar rounded source={require("./assets/info.png")} />
       <Text style={{fontSize:20,padding:10,fontFamily:'serif',justifyContent:'center',textAlign:'center',marginTop:20}}>Show Details</Text>
       
       </TouchableOpacity>
     </Card>
    
   </View>
        </View>
        <View style={{alignItems:'center',marginTop:16}}>
        <TouchableOpacity style={{backgroundColor:'#52A9E3',width:'80%',height:50,borderRadius:10}} onPress={signOut}><Text style={{textAlign:'center',padding:10,fontSize:20,color:'white',fontWeight:'600'}}>Logout</Text></TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  //  
   input:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:20,
    fontFamily:'serif'
   },
    //  
  text: {
    fontFamily: "serif",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 175,
    height: 175,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom:20
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    right:-60,
    // top: 10,
    marginRight:50,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
});
