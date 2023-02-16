import { View, Text, Image, SafeAreaView,TouchableOpacity,navigation } from "react-native";
import { Card, ListItem, Button, Icon,Avatar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

export default function Cards() {
  const navigation=useNavigation()
  return (
    <SafeAreaView>
        <Card containerStyle={{width:195,borderRadius:15}}>
        <TouchableOpacity onPress={()=>navigation.navigate("HouseDetails")}>
  
  <Card.Image source={require('./assets/download.jpeg')} style={{width:'100%'}}/>
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
  <Text style>
  House Name:{'\n'}
      Price:1000     For:Boys{'\n'}
      Rating: <Icon
            name='star'
              color='#FFD700' 
                iconStyle={{alignSelf:'flex-start',}}
              /><Text>4.5</Text>
  </Text>
  </TouchableOpacity>
  
    <Button title="Book Now"  containerStyle={{marginTop:5,borderRadius:10,marginBottom:10}}></Button>
  
  
</Card>
    </SafeAreaView>
  );
}
