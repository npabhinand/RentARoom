import { View, Text } from 'react-native'
import React from 'react'
import {
    Card,
    Avatar,
    Rating,
    Icon,
  } from "react-native-elements";
const Feedback = () => {
  return (
    <View>
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
                <TouchableOpacity style={{backgroundColor:'#52A9E3',height:40,borderRadius:5}} 
                ><Text style={{textAlign:'center',padding:10,fontSize:15,color:'white',fontWeight:'600'}}>post</Text></TouchableOpacity>
              </View>
    </View>
  )
}

export default Feedback