import { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import {useNavigation} from '@react-navigation/native';
import { doc, getDoc } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/database';

export default function HomeCards() {
const [color, setColor] = useState("white")

const navigation=useNavigation();

const [data,setData]=useState([]);
useEffect(() => {
  const db = firebase.firestore();
const collectionRef = db.collection('property');
collectionRef.get().then((querySnapshot) => {
  const dataArray = [];
  querySnapshot.forEach((doc) => {
    dataArray.push(doc.data());
  });
  setData(dataArray);
}).catch((error) => {
  console.log('Error getting documents:', error);
});
}, []);
  return (
    <View style={{flexDirection:'row'}}>
        {data && data.map((item, index) => (
      <Card
        containerStyle={{
          borderRadius: 15,
          elevation: 5,
          width: 300,
          backgroundColor:"#3c3637"
        }}
        key={index}>
      <TouchableOpacity onPress={()=>navigation.navigate('HouseDetails',{item})}>
        <Image
          source={require("./assets/download.jpeg")}
          style={{
            width: 298,
            elevation: 50,
            marginLeft: -15,
            marginTop: -15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            position: "absolute",
            right: 10,
            top: 5,
          }}
        >
          <TouchableOpacity>
            <Icon name="heart" type="font-awesome" onPress={()=>color=="red"?setColor("white"):setColor("red")} color={color} size={30} />
          </TouchableOpacity>
        </View>
        <View >
          <Text style={{color:"white", fontSize:20}}>{item.houseName}</Text>
        </View>
        </TouchableOpacity>
       
      </Card>
      ))}
    </View>
  );
}
