import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { PricingCard, lightColors,Card ,CheckBox,Button ,} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Payment = ({ navigation,route }) => {
  const {item} = route.params;
      console.log(item)
    const [selectedIndex, setIndex] = React.useState(0);
  return (
    <View containerStyle={{flex:1}}>
      <View>
      <Text style={{marginBottom:20,fontFamily:'',fontSize:25,fontWeight:'600',marginTop:20,marginLeft:20}}>Address</Text>
      <Card containerStyle={{borderRadius:20}}>
        <Text style={{marginBottom:20,fontFamily:'',fontSize:15}}>{item.owner.name}</Text>
        <Card.Divider />
        <Text style={{marginBottom:20,fontFamily:'',fontSize:15}}>{item.houseName}</Text>
        <Card.Divider />
        <Text style={{fontFamily:'',fontSize:15}}>9048407795</Text>
      </Card>

      </View>


      <View>
      <Text style={{marginBottom:20,fontFamily:'',fontSize:25,fontWeight:'600',marginTop:20,marginLeft:20}}>Payment Method</Text>
      <Card containerStyle={{borderRadius:20}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <CheckBox
           checked={selectedIndex === 0}
           onPress={() => setIndex(0)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
         /><Text>Cards</Text>
        </View>
         <Card.Divider />
         <View style={{flexDirection:'row',alignItems:'center'}}>
      <CheckBox
           checked={selectedIndex === 1}
           onPress={() => setIndex(1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
         /><Text>UPI</Text>
         </View>
      </Card>
      </View>

      <View style={{flexDirection:'row',alignItems:'flex-end'}}>
      <Text style={{fontFamily:'',fontSize:25,fontWeight:'600',marginTop:20,marginLeft:10}}>Total</Text>
      <Text style={{fontFamily:'',fontSize:25,fontWeight:'bold',marginTop:20,marginLeft:10}}> ₹15000</Text>
    </View>

    

            <Button title="Proceed to payment" color="#4F9FA0" buttonStyle={{height:50,width:'95%',marginTop:20,marginLeft:10,borderRadius:10}}></Button>
    </View>

    
   
    
  )
}

export default Payment