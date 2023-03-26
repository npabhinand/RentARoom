import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Avatar, Card } from '@rneui/base'
import Dues from './Dues'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Pending() {
  
    return (
      <View>
        <Card containerStyle={{borderRadius:20}}>
        <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-between' }}>
        <Avatar source={require('./assets/profile.jpg')}></Avatar>
        <View  style={{ flexDirection: 'column'}}>
        <Text>Arjun Babu</Text>
        <Text style={{fontWeight:'200'}}>Gopan House</Text>
        </View>
        <Text>₹1500</Text>
        <Text>Pending</Text>
        </View>
        </Card>
        
        <Card containerStyle={{borderRadius:20}}>
        <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-between' }}>
        <Avatar source={require('./assets/profile.jpg')}></Avatar>
        <View  style={{ flexDirection: 'column'}}>
        <Text>Arjun Babu</Text>
        <Text style={{fontWeight:'200'}}>Gopan House</Text>
        </View>
        <Text>₹1500</Text>
        <Text>Pending</Text>
        </View>
        </Card>

       
      </View>
    )
  }


