import { Card,Tab,TabView } from "@rneui/base";
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Transactions from "./Transactions";

export default function Dues() {
    const [index, setIndex] = React.useState(0);

  return (
    <View>
      <View style={{ alignItems: "center", }}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            backgroundColor: "#aedbeb",
            borderWidth: .5,
          }}
        >
          <Text style={{textAlign:'center',padding:10,marginTop:50,fontSize:30,fontWeight:'200'}}>Total</Text>
          <Text style={{textAlign:'center',fontSize:30,fontWeight:'200'}}>₹15000</Text>
        </TouchableOpacity>
      </View>
      <Card>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: "#aedbeb",
              justifyContent: "center",
              marginRight: 15,
            }}
          >
            <Image  style={{width:40,height:40,marginLeft:5,}} source={require("./assets/transaction.png")}></Image>
            <Text style={{ textAlign: "center" }}>Transaction</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: "#aedbeb",
              justifyContent: "center",
              marginRight: 15,
            }}
          >
            <Image style={{width:40,height:40,marginLeft:5,}} source={require("./assets/paid.png")}></Image>
            <Text style={{ textAlign: "center" }}>Paid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: "#aedbeb",
              justifyContent: "center",
              marginRight: 15,
            }}
          >
            <Image style={{width:40,height:40,marginLeft:5,}} source={require("./assets/pending.png")}></Image>
            <Text style={{ textAlign: "center" }}>Pending</Text>
          </TouchableOpacity>
        </View>
      </Card>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10,marginTop:20}}>
      <Text style={{fontSize:20}}>Transactions</Text>
      <Text style={{fontSize:15,fontColor:''}}>see all</Text>
      
      </View>
      <Transactions/>
    </View>
    
  );
}
