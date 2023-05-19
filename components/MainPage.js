import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ToastAndroid } from "react-native";
import { Card, Icon } from "react-native-elements";


export default function MainPage({ navigation, route }) {
  const { searchResults, userD } = route.params;
 console.log(searchResults)
  const handleWishlist = (propertyId, index) => {
    // Wishlist logic
  };

  const book = async (item) => {
    // Book property logic
  };

  return (
    <SafeAreaView>
      <View>
        {searchResults.map((item, index) => (
          <Card key={index} containerStyle={{ width: "100%", height: 150, borderRadius: 10, padding: 10, alignSelf: 'center' }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: item.Images[0] }}
                  resizeMode="cover"
                  style={{
                    width: "55%",
                    height: 150,
                    marginLeft: -15,
                    marginTop: -15,
                    marginTop: -10,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View style={{ position: "absolute", left: 140 }}>
                  <TouchableOpacity>
                    <Icon
                      name="heart"
                      type="font-awesome"
                      onPress={() => handleWishlist(item.propertyId, index)}
                      color={item.isWishlisted ? "red" : "white"} // Use isWishlisted property to determine color
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 10 }}>{item.houseName}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text></Text>
                    <Text style={{ fontSize: 15 }}>{item.gender}</Text>
                    <Icon name="star" color="#FFD700" iconStyle={{ alignSelf: "flex-start" }} />
                    <Text> 4.5</Text>
                  </View>
                  <Text
                    style={{ fontSize: 18, fontWeight: '200', textDecorationLine: 'underline' }}
                    onPress={() => navigation.navigate("HouseDetails", { item: item, userD: userD })}
                  >
                    Show Details
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#2637C3', fontSize: 18, marginTop: 5 }}>₹{item.price}  </Text>
                    {item.status === "booked" ? (
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#ccc",
                          height: 40,
                          borderRadius: 5,
                          width: 8,
                        }}
                        disabled
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            padding: 10,
                            fontSize: 15,
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          Book
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#52A9E3",
                          height: 40,
                          borderRadius: 5,
                          width: 80,
                        }}
                        onPress={() => book(item)}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            padding: 10,
                            fontSize: 15,
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          Book
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        ))}
      </View>
    </SafeAreaView>
  );
}
