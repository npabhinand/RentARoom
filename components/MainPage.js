import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Navigation,
  ScrollView,
  TextInput,
} from "react-native";
import back from "./assets/back.png";
import { Avatar, ListItem, Button, Icon, Card } from "@rneui/themed";
import React, { useRef, useState } from "react";
import Cards from "./Cards";

export default function MainPage({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const onSearch = () => {
    console.log(`Searching for ${searchText}`);
  };

  return (
    <View style={{flex:1,}}>
      <ScrollView >
        <View style={{ justifyContent: "center"}}>
          <TextInput
            style={{
              height: 50,
              width: "95%",
              padding: 10,
              borderRadius: 15,
              borderColor: "gray",
              marginTop: 20,
              marginLeft: 10,
              borderWidth: 1,
              fontSize: 20,
            }}
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            onPress={onSearch}
            placeholder="Search Here"
          />
        </View>
        <View style={{ justifyContent:'flex-start',marginBottom:10 }}>
          <Cards />
          <Cards />
          <Cards />
          <Cards/>
        </View>
      </ScrollView>
    </View>
  );
}
