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

export default function Cards() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Card containerStyle={{ width: 195, borderRadius: 10 ,backgroundColor:'#00000'}}>
        <TouchableOpacity onPress={() => navigation.navigate("HouseDetails")}>
          <Image
            source={require("./assets/download.jpeg")}
            resizeMode="cover"
            style={{ width: 193, height: 150,marginLeft:-15,
          marginTop:-15,
          borderTopLeftRadius:10,
          borderTopRightRadius:10 }}
          />
          <View
            style={{
              position: "absolute",
              right: -5,
              top: -5,
            }}
          >
            <TouchableOpacity>
              <Icon
                name="heart"
                type="font-awesome"
                color="#FFFFFF"
                size={30}
              />
            </TouchableOpacity>
          </View>
          
          <Text>House Name: </Text>
          <Text>Price: 1000</Text>
          <Text>For: Boys</Text>
          <View style={{flexDirection:'row',}}>
          <Text>Rating: </Text> 
          <Icon name="star" color="#FFD700" iconStyle={{ alignSelf: "flex-start" }}/> 
          <Text> 4.5</Text>
          </View>
        

        <Button
          title="Book Now"
          containerStyle={{ marginTop: 5, borderRadius: 10, marginBottom: 10 }}
        ></Button>
         </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}
