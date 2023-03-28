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
  Rating,
  Icon,
} from "react-native-elements";
import Swiper from 'react-native-swiper'
import firebase from 'firebase/app';
import 'firebase/database';
// import {useRoute} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HouseDetails({ route,navigation }) {
  
  

  const {item, userD }=route.params;
  console.log(userD)
  //  const ownerId=item.ownerId
  // console.log(item)
  const book= async ()=>{
    const formData={
      studentId:userD.email,
      ownerId:item.OwnerId,
      propertyId:item.propertyId,
      status:"pending",
      houseName:item.houseName,
    }
      

   try {
                    const db = firebase.firestore();
                    const response = await db.collection('booking').add(formData);
                    console.log('Form data submitted successfully:', response);
                  } catch (error) {
                    console.log('Error submitting form data:', error);
                  }
                };
  
  const [data,setData]=useState([]);
  
  const [color, setColor] = useState("white")
  return (
    <View>
      <ScrollView>
        <View >
        <Swiper containerStyle={{height:300,width:"100%"}} showsButtons={true} autoplay={true} loadMinimal={true}>
        {item.Images.map((image, i) => (
          <Image
           key={i}
            style={{
             
              width: "100%",
              height: 300,
              
            }}
            source={{ uri: image }}
          ></Image>
          
          ))}


        </Swiper>
          {/* <View
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
                onPress={() => navigation.navigate("MainPage",{userD})}
              />
            </TouchableOpacity>
          </View> */}
          {/* <View
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
          </View> */}
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
                  <Text>{item.phone}</Text>
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
                  <Text>{item.food}</Text>
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
              <TouchableOpacity style={{backgroundColor:'#52A9E3',height:40,borderRadius:5}} 
              onPress={book}><Text style={{textAlign:'center',padding:10,fontSize:15,color:'white',fontWeight:'600'}}>Book Now</Text></TouchableOpacity>
       
            </View>
            <Card.Divider />
            <Card containerStyle={{ shadowColor: "dark" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              onPress={()=>navigation.navigate("Feedback")}>
                <Rating
                  ratingCount={5}
                  imageSize={35}
                  style={{ height: 60 }}
                ></Rating>
                <TouchableOpacity style={{backgroundColor:'#52A9E3',height:40,borderRadius:5}} 
                ><Text style={{textAlign:'center',padding:10,fontSize:15,color:'white',fontWeight:'600'}}>post</Text></TouchableOpacity>
              </View>
            </Card>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}
