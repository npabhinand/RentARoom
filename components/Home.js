import { View, Text, Image, ScrollView, StyleSheet,TouchableOpacity ,Alert} from "react-native";
import { Card } from "react-native-elements";
import HomeCards from "./HomeCards";
// import {use} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation=useNavigation()
  return (
    <View >
      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "serif",
            padding: 3,
          }}
        >
          Find the best place
        </Text>

        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        ><TouchableOpacity onPress={()=>{navigation.navigate("MainPage")}}> 
          <Card
            containerStyle={{ borderWidth: 0, shadowColor: "white" }}
            wrapperStyle={{ borderWidth: 0 }}
          >
            <Card.Image
              source={require("./assets/download.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 15 }}
            />
            <Text style={{ textAlign: "center" }}>Hostel</Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card containerStyle={{ borderWidth: 0, shadowColor: "white" }}>
            <Card.Image
              source={require("./assets/download.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 15 }}
            />
            <Text style={{ textAlign: "center" }}>House</Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card containerStyle={{ borderWidth: 0, shadowColor: "white" }}>
            <Card.Image
              source={require("./assets/download.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 15 }}
            />
            <Text style={{ textAlign: "center" }}>Room</Text>
          </Card>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 30, fontFamily: "serif", padding: 20 }}>
            Latest
          </Text>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <ScrollView horizontal={true} style={styles.scrollView}>
            <HomeCards />
          <HomeCards />
          <HomeCards />
            </ScrollView>
          </View>
        </View>
        <View  >
        
          <Text style={{ fontSize: 30, fontFamily: "serif", padding: 10 }}> For Boys</Text>
          <ScrollView horizontal={true} style={styles.scrollView}>
          <HomeCards />
          <HomeCards />
          <HomeCards />
          </ScrollView>
        </View>
        <View>
          <Text style={{ fontSize: 30, fontFamily: "serif", padding: 10 }}> For Girls</Text>
          <ScrollView horizontal={true} style={styles.scrollView}>
          <HomeCards />
          <HomeCards />
          <HomeCards />
          </ScrollView>
        </View>
        <View style={{padding:10}}>
          
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    horizontal: "true",
  },
  text: {
    fontSize: 42,
  },
});
