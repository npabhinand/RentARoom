import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import {useNavigation} from '@react-navigation/native';

export default function HomeCards() {
const [color, setColor] = useState("white")
const navigation=useNavigation();
  return (
    <View style={{marginBottom:10}}>
      <Card
        containerStyle={{
          borderRadius: 15,
          elevation: 5,
          width: 300,
          backgroundColor:"#3c3637"
        }}
      >
      <TouchableOpacity onPress={()=>navigation.navigate('HouseDetails')}>
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
            <Icon name="heart" type="font-awesome" onPress={()=>color=="red"?setColor("white"):setColor("red")} color={color} size={30} />
          </TouchableOpacity>
        </View>
        <View >
          <Text style={{color:"white", fontSize:20}}>Gopan House</Text>
        </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
}
