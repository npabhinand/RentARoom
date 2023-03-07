import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  navigation,
} from "react-native";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Cards() {
  const [color, setColor] = useState("white");
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Card containerStyle={{ width: "100%", height: 175, borderRadius: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("HouseDetails")}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./assets/download.jpeg")}
              resizeMode="cover"
              style={{
                width: "50%",
                height: 175,
                marginLeft: -15,
                marginTop: -15,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
            <View
              style={{
                position: "absolute",
                left: 125,
                top: -10,
              }}
            >
              <TouchableOpacity>
                <Icon
                  name="heart"
                  type="font-awesome"
                  onPress={() =>
                    color == "red" ? setColor("white") : setColor("red")
                  }
                  color={color}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20 }}>House Name: </Text>
              <Text>Accomodation For: Boys</Text>
              <Text>Property Type: House</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>Rating: </Text>
                <Icon
                  name="star"
                  color="#FFD700"
                  iconStyle={{ alignSelf: "flex-start" }}
                />
                <Text> 4.5</Text>
              </View>
              <Text>price: ₹15000</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}
