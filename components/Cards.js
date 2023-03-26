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
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cards(props) {
  const navigation = useNavigation();
  const userD = props.userD;
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const collectionRef = db.collection('property');
    collectionRef.get().then((querySnapshot) => {
      const dataArray = [];
      let docIndex = 0;
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
        dataArray[docIndex].propertyId = doc.id;
        docIndex++;
      });
      setData(dataArray);
    }).catch((error) => {
      console.log('Error getting documents:', error);
    });

    const userId = userD.email;
    const wishlistRef = firebase.firestore().collection("wishlist");
    wishlistRef.where("userId", "==", userId).get().then((querySnapshot) => {
      const wishlistItems = querySnapshot.docs.map((doc) => doc.data().propertyId);
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          isWishlisted: wishlistItems.includes(item.propertyId.toString()),
        }))
      );
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }, []);

  const [color, setColor] = useState("white");

  const handleWishlist = (propertyId, index) => {
    const userId = userD.email;
    const wishlistRef = firebase.firestore().collection("wishlist");

    const item = data[index];
    const isWishlisted = !item.isWishlisted;

    if (isWishlisted) {
      wishlistRef.add({
        userId: userId,
        propertyId: propertyId.toString(),
      }).then(() => {
        setData((prevData) =>
          prevData.map((item, i) =>
            i === index ? { ...item, isWishlisted: true } : item
          )
        );
      }).catch((error) => {
        console.log("Error adding document: ", error);
      });
    } else {
      wishlistRef.where("userId", "==", userId).where("propertyId", "==", propertyId.toString()).get().then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.docs[0].ref.delete().then(() => {
            setData((prevData) =>
              prevData.map((item, i) =>
                i === index ? { ...item, isWishlisted: false } : item
              )
            );
          }).catch((error) => {
            console.log("Error deleting document: ", error);
          });
        }
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    }
  
  }


  return (
    
    <SafeAreaView>
        {data && data.map((item, index) => (
        <Card  key={index} containerStyle={{ width: 500, height: 175, borderRadius: 10 }}>
        <TouchableOpacity  onPress={() => navigation.navigate("HouseDetails",{item:item, userD: userD})}>
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
  onPress={() => handleWishlist(item.propertyId, index)}
  color={item.isWishlisted ? "red" : "white"} // Use isWishlisted property to determine color
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
