import { useState,useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import {
  Card,
  Avatar,
  Button,
  AirbnbRating,
  Rating,
  Icon,
} from "react-native-elements";
import Swiper from 'react-native-swiper'
import firebase from 'firebase/app';
import 'firebase/database';
// import {useRoute} from '@react-navigation/native'


export default function HouseDetails({ route,navigation }) {
  // const renderItem = ({ item, index }) => (
  //   <View style={styles.slideContainer}>
  //     <Text style={styles.slideTitle}>{item.title}</Text>
  //     <Text style={styles.slideContent}>{item.content}</Text>
  //   </View>
    
  // );
  const {item }=route.params;
  
  console.log(item.id)
  const [data,setData]=useState([]);
  // useEffect (()=>{
  //   const db = firebase.firestore();
  //   var docRef = db.collection("property").doc("O22kHuhZx755wGPQBhHV") 
  //   docRef.get().then((doc) => {
  //       if (doc.exists) {
  //           console.log("Document data:", doc.data());
  //           setData(doc.data());
  //       } else {
  //           // doc.data() will be undefined in this case
  //           console.log("No such document!");
  //       }
  //   }).catch((error) => {
  //       console.log("Error getting document:", error);
  //   });

  // })
  const [color, setColor] = useState("white")
  return (
    <View>
      <ScrollView>
        <View >
        <Swiper containerStyle={{height:300,width:"100%"}} showsButtons={true} autoplay={true} loadMinimal={true}>
          <Image
            style={{
              
              width: "100%",
              height: 300,
              
            }}
            source={require("./assets/download.jpeg")}
          ></Image>
          <Image
            style={{
              
              width: "100%",
              height: 300,
              // borderTopLeftRadius: 30,
              // borderTopRightRadius: 30,
            }}
            source={require("./assets/download.jpeg")}
          ></Image>
          <Image
            style={{
              
              width: "100%",
              height: 300,
              // borderTopLeftRadius: 30,
              // borderTopRightRadius: 30,
            }}
            source={require("./assets/download.jpeg")}
          ></Image>



        </Swiper>
          <View
            style={{
              position: "absolute",
              left: 5,
              top: 5,
            }}
          >
            <TouchableOpacity>
              <Avatar
                rounded
                source={require("./assets/back.png")}
                onPress={() => navigation.navigate("MainPage")}
              />
            </TouchableOpacity>
          </View>
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
                onPress={()=>color=="red"?setColor("white"):setColor("red")}
                color={color}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              right: 5,
              top: 5,
            }}
          ></View>
        </View>
        <View>
          <Card containerStyle={{ width: "94%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="star"
                color="#FFD700"
                iconStyle={{ alignSelf: "flex-start" }}
              />
              <Text>4.5</Text>
            </View>
            <Text style={{ fontSize: 20 }}>{item.houseName}{"\n"}</Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <Avatar
                rounded
                source={require("./assets/location.png")}
              ></Avatar>
              <Text>Ambadi Nagar</Text>
            </View>
            <Card.Divider />
            <Text style={{ fontSize: 20, marginTop: 10 }}>Descrption</Text>
            <Text style={{ textAlign: "justify" }}>
              {item.description}
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <ScrollView horizontal={true}>
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/for.png")} />
                  <Text style={{ fontWeight: "100" }}>For</Text>
                  <Text>{item.gender}</Text>
                </Card>

                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/phone.png")} />
                  <Text style={{ fontWeight: "100" }}>Phone</Text>
                  <Text>9048407795</Text>
                </Card>
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/food.png")} />
                  <Text style={{ fontWeight: "100" }}>Food</Text>
                  <Text>item.food</Text>
                </Card>
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/furnished.png")} />
                  <Text style={{ fontWeight: "100" }}>Furniture</Text>
                  <Text>{item.furniture}</Text>
                </Card>

                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/bed.png")} />
                  <Text style={{ fontWeight: "100" }}>Bedroom</Text>
                  <Text>{item.bedroom}</Text>
                </Card>

                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/water.png")} />
                  <Text style={{ fontWeight: "100" }}>Water</Text>
                  <Text>{item.water}</Text>
                </Card>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                padding: 10,
                backgroundColor: "#e6e6e6",
                marginTop: 10,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ padding: 15, fontSize: 20 }}>₹{item.price}</Text>
              <Button
                title={"Book Now"}
                containerStyle={{ borderRadius: 5, width: 150 }}
              onPress={()=>{ navigation.navigate("Payment");}}></Button>
            </View>
            <Card.Divider />
            <Card containerStyle={{ shadowColor: "dark" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Rating
                  ratingCount={5}
                  imageSize={35}
                  style={{ height: 60 }}
                ></Rating>
                <Button
                  title="Post"
                  containerStyle={{ borderRadius: 5, width: 100 }}
                />
              </View>
            </Card>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}
