import { View, Text, Image,TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function HomeCards() {
  return (
    <View
      style={{
    
        elevation: 3,
      }}
    >
      <Card
        containerStyle={{
          borderWidth: 0,
          shadowOpacity: 0.8,
          borderRadius:15,
          shadowOffset: { width: 7, height: 2 },
          shadowRadius: 10,
          elevation: 5,
          width: 300,
        }}
      >
        <Image
          source={require("./assets/download.jpeg")}
          style={{
            shadowOpacity: 0.8,
          borderRadius:15,
          shadowOffset: { width: 7, height: 2 },
          shadowRadius: 10,
          elevation: 5,
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
                <Icon
      name='heart'
      type='font-awesome'
      color='#FFFFFF'
      size={30}
    /></TouchableOpacity>
          </View>
        <Text style={{ margin: 10 }}>3 Bedrooms, House</Text>
      </Card>
    </View>
  );
}
