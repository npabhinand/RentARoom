import { TouchableOpacity,Text,View,Image,Navigation} from 'react-native';
import back from "./assets/back.png";
import { Avatar,ListItem ,Button } from '@rneui/themed';


export default function Notification({navigation}){


return (
     <View>
     <View style={{flexDirection:"row", padding:10,alignItems:'center'}}>
     <TouchableOpacity>
        <Image source={back} style={{width: 50,height: 50,borderRadius: 50,overflow: "hidden"}}></Image>
        </TouchableOpacity>
        <Text style={{padding:10,fontSize:30}}>Your {'\n'}Notification</Text>
     </View>

     <View >
     <ListItem bottomDivider >      
     <ListItem.Content style={{flexDirection:"row",alignItems:'center',justifyContent:'space-evenly',}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
      <ListItem.Title>Denny wants House</ListItem.Title>
      
    </ListItem.Content>
    <Button title="Accept" buttonStyle={{borderRadius:20,backgroundColor:'black',flexDirection: 'column'}}/>
    <Button title="Decline" buttonStyle={{borderRadius:20,backgroundColor:'#f2f2f2',flexDirection: 'column'}}
        titleStyle={{  color: 'black' }}
    />
    
  </ListItem>
</View>
<View >
     <ListItem bottomDivider >      
     <ListItem.Content style={{flexDirection:"row",alignItems:'center',justifyContent:'space-evenly',}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
      <ListItem.Title>Denny wants House</ListItem.Title>
      
    </ListItem.Content>
    <Button title="Accept" buttonStyle={{borderRadius:20,backgroundColor:'black'}}/>
    <Button title="Decline" buttonStyle={{borderRadius:20,backgroundColor:'#f2f2f2'}}
        titleStyle={{  color: 'black' }}
    />
    
  </ListItem>
</View>
<View >
     <ListItem bottomDivider >      
     <ListItem.Content style={{flexDirection:"row",alignItems:'center',justifyContent:'space-evenly',}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
      <ListItem.Title>A user interested in House</ListItem.Title>
      
    </ListItem.Content>
    <Button title="Accept" buttonStyle={{borderRadius:20,backgroundColor:'black'}}/>
    <Button title="Decline" buttonStyle={{borderRadius:20,backgroundColor:'#f2f2f2'}}
        titleStyle={{  color: 'black' }}
    />
    
  </ListItem>
</View>



     
</View>
);
}