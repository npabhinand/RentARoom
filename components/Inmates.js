import { TouchableOpacity,Text,View,Image,Navigation,Alert} from 'react-native';
import back from "./assets/back.png";
import { Avatar,ListItem ,Button } from '@rneui/themed';

const Inmates = () => {
    createTwoButtonAlert = () =>
    Alert.alert('Details', 'Shahban \n9048407795', [
      
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View>
      <View >
     <ListItem bottomDivider >      
     <ListItem.Content style={{flexDirection:"row",alignItems:'center',justifyContent:'space-around',}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
      <ListItem.Title>Shahban</ListItem.Title>
      
    </ListItem.Content>
    <Button title="View Details" buttonStyle={{borderRadius:20,backgroundColor:'#52A9E3'}}
        onPress={createTwoButtonAlert}
    />
    
    
    
  </ListItem>
</View>
<View >
     <ListItem bottomDivider >      
     <ListItem.Content style={{flexDirection:"row",alignItems:'center',justifyContent:'space-around',}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
      <ListItem.Title>Denny </ListItem.Title>
      
    </ListItem.Content>
    <Button title="View Details" buttonStyle={{borderRadius:20,backgroundColor:'#52A9E3'}}/>
    
    
  </ListItem>
</View>
<View >
     <ListItem bottomDivider >      
     <ListItem.Content style={{flexDirection:"row",alignItems:'center',justifyContent:'space-around',}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
      <ListItem.Title>Denny</ListItem.Title>
      
    </ListItem.Content>
    <Button title="View Details" buttonStyle={{borderRadius:20,backgroundColor:'#52A9E3'}}/>
    
    
  </ListItem>
</View>



     
</View>
    
  )
}

export default Inmates