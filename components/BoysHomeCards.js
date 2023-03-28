import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/database";

export default function BoysHomeCards(props) {
  const userD = props.userD;

  const navigation = useNavigation();
  const [isUpdated, setIsUpdated] = useState(false); 
  const [data, setData] = useState([]);
  const [color, setColor] = useState("white");

  useEffect(() => {
    const db = firebase.firestore();
    const collectionRef = db
      .collection("property")
      .where("gender", "==", "Boys");
    collectionRef
      .get()
      .then((querySnapshot) => {
        const dataArray = [];
        let docIndex = 0;
        querySnapshot.forEach((doc) => {
          dataArray.push(doc.data());
          dataArray[docIndex].propertyId = doc.id;
          docIndex++;
        });
        setData(dataArray);
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });

    const userId = userD.email;
    const wishlistRef = firebase.firestore().collection("wishlist");
    wishlistRef
      .where("userId", "==", userId)
      .get()
      .then((querySnapshot) => {
        const wishlistItems = querySnapshot.docs.map(
          (doc) => doc.data().propertyId
        );
        setData((prevData) =>
          prevData.map((item) => ({
            ...item,
            isWishlisted: wishlistItems.includes(item.propertyId.toString()),
          }))
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [isUpdated]);

  const handleWishlist = (propertyId, index) => {
    const userId = userD.email;
    const wishlistRef = firebase.firestore().collection("wishlist");

    const item = data[index];
    const isWishlisted = !item.isWishlisted;

    if (isWishlisted) {
      wishlistRef
        .add({
          userId: userId,
          propertyId: propertyId.toString(),
        })
        .then(() => {
          setData((prevData) =>
            prevData.map((item, i) =>
              i === index ? { ...item, isWishlisted: true } : item
            )
          );
        })
        .catch((error) => {
          console.log("Error adding document: ", error);
        });
        setIsUpdated(true);
    }
     else {
      wishlistRef
        .where("userId", "==", userId)
        .where("propertyId", "==", propertyId.toString())
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            querySnapshot.docs[0].ref
              .delete()
              .then(() => {
                setData((prevData) =>
                  prevData.map((item, i) =>
                    i === index ? { ...item, isWishlisted: false } : item
                  )
                );
              })
              .catch((error) => {
                console.log("Error deleting document: ", error);
              });
          }
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
    setIsUpdated(true);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {/* {data.slice(0, 5).map((item, index) => ( */}
      {data &&
        data.map((item, index) => (
          <Card
            containerStyle={{
              borderRadius: 15,
              elevation: 5,
              width: 200,
              height:220,
              
            }}
            key={index}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("HouseDetails", { item })}
            >
              <Image
                source={{uri:item.Images[0]}}
                style={{
                  width: 198,
                  height:140,
                  marginLeft: -15,
                  marginTop: -15,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 2,
                  
                }}
              >
                <TouchableOpacity style={{backgroundColor:'#DEE1E9',width:40,height:30,justifyContent:'center',borderRadius:15,alignItems:'center'}}>
                  <Icon 
                    name="heart"
                    type="font-awesome"
                    onPress={() => handleWishlist(item.propertyId, index)}
                    color={item.isWishlisted ? "red" : "white"} // Use isWishlisted property to determine color
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontSize: 20, }}>
                  {item.houseName}
                </Text>
                <Text style={{fontSize: 18}}>{item.type}</Text>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{}}>For: {item.gender}</Text>
                <Text style={{color:'#7166EE'}}>₹ {item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        ))}
    </View>
  );
}

