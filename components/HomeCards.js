import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function HomeCards() {
const [color, setColor] = useState("white")
  return (
    <View style={{marginBottom:10}}>
      <Card
        containerStyle={{
          borderRadius: 15,
          elevation: 5,
          width: 300,
          backgroundColor:"black"
        }}
      >
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
          <Text style={{ margin: 10,color:"white" }}>3 Bedrooms, House</Text>
        </View>
      </Card>
    </View>
  );
}
