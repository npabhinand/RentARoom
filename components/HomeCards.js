import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeCards(props) {
  
  const userD = props.userD;
  
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [color, setColor] = useState("white");

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
    <View style={{ flexDirection: "row" }}>
      {data &&
        data.map((item, index) => (
          <Card
            containerStyle={{
              borderRadius: 15,
              elevation: 5,
              width: 300,
              backgroundColor: "#3c3637",
            }}
            key={index}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("HouseDetails", { item })}
            >
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
                   <Icon
  name="heart"
  type="font-awesome"
  onPress={() => handleWishlist(item.propertyId, index)}
  color={item.isWishlisted ? "red" : "white"} // Use isWishlisted property to determine color
  size={25}
/>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ color: "white", fontSize: 20 }}>
                  {item.houseName}
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        ))}
    </View>
  );
}
