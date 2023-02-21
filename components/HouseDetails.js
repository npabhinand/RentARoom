import { Text, View, Image, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";

import {
  Card,
  Avatar,
  Button,
  AirbnbRating,
  Rating,
  Icon,
} from "react-native-elements";
  


export default function HouseDetails({ navigation }) {
  
  const renderItem = ({ item, index }) => (
    <View style={styles.slideContainer}>
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideContent}>{item.content}</Text>
    </View>
  );
  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: "space-around" }}>
       
          <Image
            style={{
              width: "100%",
              height: 300,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
            source={require("./assets/download.jpeg")}
          ></Image>
          <View
            style={{
              position: "absolute",
              left: 5,
              top: 5,
            }}
          >
            <TouchableOpacity>
              <Avatar
                rounded
                source={require("./assets/back.png")}
                onPress={() => navigation.navigate("MainPage")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              right: 10,
              top: 5,
            }}
          >
          <TouchableOpacity>
                <Icon
      name='heart'
      type='font-awesome'
      color='#FFFFFF'
      size={30}
    /></TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              right: 5,
              top: 5,
            }}
          ></View>
        </View>
        <View>
          <Card containerStyle={{ width: "94%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="star"
                color="#FFD700"
                iconStyle={{ alignSelf: "flex-start" }}
              />
              <Text>4.5</Text>
            </View>
            <Text style={{ fontSize: 20 }}>PARAMBATH HOUSE{"\n"}</Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <Avatar
                rounded
                source={require("./assets/location.png")}
              ></Avatar>
              <Text>Ambadi Nagar</Text>
            </View>
            <Card.Divider />
            <Text style={{ fontSize: 20, marginTop: 10 }}>Descrption</Text>
            <Text style={{ textAlign: "justify" }}>
              A house for rental purpose typically refers to a standalone
              building that is available for someone to live in for a specified
              period of time, usually in exchange for regular payments called
              rent.
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <ScrollView horizontal={true}>
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/for.png")} />
                  <Text style={{ fontWeight: "100" }}>For</Text>
                  <Text>Boys</Text>
                </Card>
                
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
               
                  <Avatar source={require("./assets/phone.png")} />
                  <Text style={{ fontWeight: "100" }}>Phone</Text>
                  <Text>9048407795</Text>
                </Card>
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/food.jpeg")} />
                  <Text style={{ fontWeight: "100" }}>Food</Text>
                  <Text>No</Text>
                </Card>
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/furnished.png")} />
                  <Text style={{ fontWeight: "100" }}>furnished</Text>
                  <Text>Yes</Text>
                </Card>



                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                
                  <Avatar source={require("./assets/bed.jpg")} />
                  <Text style={{ fontWeight: "100" }}>Bedroom</Text>
                  <Text>3</Text>
                </Card>    
                
                
                <Card
                  containerStyle={{
                    width: 100,
                    height: 120,
                    borderRadius: 10,
                    backgroundColor: "#aedbeb",
                  }}
                >
                  <Avatar source={require("./assets/water.png")} />
                  <Text style={{ fontWeight: "100" }}>Water</Text>
                  <Text>Yes</Text>
                </Card>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                padding: 10,
                backgroundColor: "#e6e6e6",
                marginTop: 10,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ padding: 15, fontSize: 20 }}>₹1500/person</Text>
              <Button
                title={"Book Now"}
                containerStyle={{ borderRadius: 5, width: 150 }}
              ></Button>
            </View>
            <Card.Divider />
            <Card containerStyle={{ shadowColor: "dark" }}>
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
                <Button
                  title="Post"
                  containerStyle={{ borderRadius: 5, width: 100 }}
                />
              </View>
            </Card>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}
