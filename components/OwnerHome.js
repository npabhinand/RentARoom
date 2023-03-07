import { TouchableOpacity, Text, View, Image, Navigation } from "react-native";
import { Avatar, ListItem, Button } from "@rneui/themed";
import { Card } from "react-native-elements";

// import { plus } from "react-icons/fa";
// import HomeScreen from './HomeScreen';

export default function OwnerHome({ navigation }) {
  return (
    <View>
      <View style={{marginBottom:10}}>
        <Text style={{ fontSize: 30, padding: 10 }}>
          Hello,{"\n"}Shahban ps
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" ,marginBottom:10}}>
     
        <Card
          containerStyle={{
            width: 170,
            height: 200,
            borderRadius: 20,
            backgroundColor: "#ffddc2",
            shadow:0
          }}
          
        >
        <TouchableOpacity onPress={() => navigation.navigate('AddProperty')}>
          <Avatar rounded source={require("./assets/plus.png")} />

          <Card.Divider />
          
          <Text style={{fontSize:15,padding:10,fontFamily:'serif',justifyContent:'center'}}>Add Property</Text>
          </TouchableOpacity>
        </Card>
        
        <Card
       containerStyle={{
         width: 170,
         height: 200,
         borderRadius: 20,
         backgroundColor: "#ffddc2",
       }}
     >
     <TouchableOpacity onPress={() => navigation.navigate('ViewProperty')}>
       <Avatar rounded source={require("./assets/total.png")} />

       <Card.Divider />
       
       <Text style={{fontSize:15,padding:10,fontFamily:'serif',justifyContent:'center'}}>View Properties</Text>
       <Text style={{textAlign:'center',justifyContent:'center'}}>10</Text>
       </TouchableOpacity>
     </Card>
        
      </View>

      


      <View style={{ flexDirection: "row", justifyContent: "space-evenly" ,marginBottom:20}}>
      <Card
          containerStyle={{
            marginTop: 15,
            width: 170,
            height: 200,
            borderRadius: 20,
            backgroundColor: "#e5e5fe",
          }} 
        >
          <Avatar rounded source={require("./assets/request.jpeg")} />
          <Card.Divider />
          <Text style={{fontSize:15,padding:10,fontFamily:'serif',justifyContent:'center'}}>Edit Property</Text>
        </Card>
     
     
     <Card
       containerStyle={{
         marginTop: 15,
         width: 170,
         height: 200,
         borderRadius: 20,
         backgroundColor: "#e5e5fe",

         
       }}
     >
       <Avatar rounded source={require("./assets/request.jpeg")} />
       <Card.Divider />
       <Text style={{fontSize:15,padding:10,fontFamily:'serif',justifyContent:'center',textAlign:'center'}}>Requests</Text>
     </Card>
   </View>
   <View style={{ flexDirection: "row", justifyContent: "space-evenly" ,padding:10}}>
    <Button color='#6b6bbf' containerStyle={{height:50,width:130,borderRadius:30,justifyContent:'flex-start'}}><Avatar rounded source={require('./assets/chat.jpg')}></Avatar> <Text style={{fontSize:15,color:'white'}}>Chat</Text></Button>
    <Button color='#6b6bbf' onPress={() => navigation.navigate('Profile')} containerStyle={{borderRadius:50}} ><Avatar rounded source={require('./assets/profile.jpg')}></Avatar></Button>
    <Button color='#6b6bbf' containerStyle={{height:50,width:130,borderRadius:30,justifyContent:'flex-start'}}><Avatar rounded source={require('./assets/chat.jpg')}></Avatar> <Text style={{fontSize:15,color:'white'}}>Dues</Text></Button>
   </View>
    </View>
  );
}
