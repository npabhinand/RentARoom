import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,  } from 'react-native';
import { Card,Button } from 'react-native-elements';
import firebase from 'firebase';
import { Avatar } from '@rneui/base';

const Wishlist = (props) => {
  const userId = props.userD.email;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const db = firebase.firestore();
        const querySnapshot = await db
          .collection('wishlist')
          .where('userId', '==', userId)
          .get();
        const dataArray = [];
      
        for (const doc of querySnapshot.docs) {
          const wishlistData = doc.data();
          const propertyId = wishlistData.propertyId;
          const propertyDoc = await db.collection('property').doc(propertyId).get();
          const propertyData = propertyDoc.data();
      
          dataArray.push({
            ...wishlistData,
            property: propertyData,
          });
        }
      
        setData(dataArray);
      };
      fetchData();
    }, []);
  
    const onClickDelete= async (propertyId, index)=>{
            
    }
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Wishlist</Text>
      {data.map((item, index) => (
        <Card
          key={index}
          containerStyle={{ width: 500, height: 170, borderRadius: 10, marginLeft: -5 }}>
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
            <TouchableOpacity style={{marginRight:-80}} onPress={() => onClickDelete(item.propertyId, index)}>
           <Avatar size={25} source={require('./assets/delete.png')} />
           </TouchableOpacity>
           </View>
            <Text style={{fontSize:18,marginTop:5}}>{item.property.houseName}</Text>
            <Text style={{fontSize:18,marginTop:5,fontWeight:'200'}}>{item.property.phone}</Text>
          
          <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between',marginRight:-80}}>
            <Text style={{ color: '#2637C3',fontSize:18,marginTop:5 }}>{item.property.price}</Text>
            <Button title='Book' color='#2637C3' containerStyle={{borderRadius:10,width:75,}}/>
           </View>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default Wishlist;
