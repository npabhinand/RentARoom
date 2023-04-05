import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ToastAndroid, ScrollView  } from 'react-native';
import { Card,Button } from 'react-native-elements';
import {  db } from "../firebase";
import { Avatar } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/app";

const Wishlist = (props) => {
  const userD=props.userD
  const [data, setData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false); 
  const navigation=useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await db
        .collection('wishlist')
        .where('userId', '==', userD.email)
        .get();

      const dataArray = [];
      let propertyData = {};

      for (const doc of querySnapshot.docs) {
        const wishlistData = doc.data();
        const propertyId = wishlistData.propertyId;
        const propertyDoc = await db.collection('property').doc(propertyId).get();
        propertyData[doc.id] = propertyDoc.data();
        propertyData[doc.id].propertyId = doc.id;

        dataArray.push({
          ...wishlistData,
          property: propertyData[doc.id],
        });
      }

      setData(dataArray);
    };
    fetchData();
  }, [isDeleted]);
  
    const onClickDelete = async (propertyId, item) => {  
      console.log(propertyId)
      db.collection("wishlist")
        .where('propertyId', '==', propertyId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
          console.log("Document successfully deleted!");
          ToastAndroid.show('Property is removed from wishlist', ToastAndroid.SHORT);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      setIsDeleted(true);
    };



    const book = async (item) => {
      const formData = {
        studentId: userD.email,
        ownerId: item.OwnerId,
        propertyId: item.propertyId,
        status: "pending",
        houseName: item.houseName,
      };
  
      try {
        const db = firebase.firestore();
        const response = await db.collection("booking").add(formData);
        console.log("Form data submitted successfully:", response);
        ToastAndroid.show('Property is booked successfully', ToastAndroid.SHORT);
      } catch (error) {
        console.log("Error submitting form data:", error);
        ToastAndroid.show('Property is not booked', ToastAndroid.SHORT);
      }
    };
  return (
    <View style={{flex:1,marginBottom:10}}>
      <Text style={{ fontSize: 25,marginTop:20,marginLeft:10,fontWeight:'500' }}>Wishlist</Text>
      <ScrollView>
      {data.map((item, index) => (
        <Card
          key={index}
          containerStyle={{ width: 400, height: 170, borderRadius: 10, marginLeft: -5 }}>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
            <Image
              source={require("./assets/download.jpeg")}
              style={{
                width: '30%',
                height: 130,
                marginLeft: -15,
                marginTop: -15,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft:20}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:-20}}>
            <Text style={{ fontSize:18,fontWeight:'200'}}>{item.property.type}</Text>
            <TouchableOpacity style={{marginRight:-80}} onPress={() => onClickDelete(item.propertyId, item)}>
           <Avatar size={25} source={require('./assets/delete.png')} />
           </TouchableOpacity>
           </View>
            <Text style={{fontSize:18,marginTop:5}}>{item.property.houseName}</Text>
            <Text style={{fontSize:18,marginTop:5,fontWeight:'200',textDecorationLine:'underline'}}
            onPress={() => {navigation.navigate("HouseDetails",{item:item.property,userD})}}>Show Details</Text>
          
          <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between',marginRight:-80}}>
            <Text style={{ color: '#2637C3',fontSize:18,marginTop:5 }}>₹{item.property.price}</Text>
            <Button title='Book' color='#2637C3' containerStyle={{borderRadius:10,width:75,}} onPress={()=> book(item=item.property,index)}/>
           </View>
            </View>
          </View>
        </Card>
      ))}
      </ScrollView>
    </View>
  );
};

export default Wishlist;
