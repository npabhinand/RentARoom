import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  navigation,
  FlatList,
} from "react-native";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/database';


export default function Cards() {
  const [color, setColor] = useState("white");
  const navigation = useNavigation();

  const [data,setData]=useState([]);
  // const todoRef=firebase.firestore().collection('property');

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
    
    <SafeAreaView>
        {data && data.map((item, index) => (
        <Card containerStyle={{ width: 500, height: 175, borderRadius: 10 }}>
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate("HouseDetails")}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./assets/download.jpeg")}
              resizeMode="cover"
              style={{
                width: "55%",
                height: 175,
                marginLeft: -15,
                marginTop: -15,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
            <View
              style={{
                position: "absolute",
                left: 200,
                top: -10,
              }}
            >
              <TouchableOpacity>
                <Icon
                  name="heart"
                  type="font-awesome"
                  onPress={() =>
                    color == "red" ? setColor("white") : setColor("red")
                  }
                  color={color}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15,fontWeight:'500' }}>Name:{item.houseName}</Text>
              <Text style={{ fontSize: 15 }}>Accomodation For: {item.gender}</Text>
              <Text style={{ fontSize: 15 }}>Property Type: {item.type}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>Rating: </Text>
                <Icon
                  name="star"
                  color="#FFD700"
                  iconStyle={{ alignSelf: "flex-start" }}
                />
                <Text> 4.5</Text>
              </View>
              <Text>price: ₹{item.price}</Text>
              <Text></Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      
      ))}
    </SafeAreaView>
   
  );
}
