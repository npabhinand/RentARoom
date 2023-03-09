import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { PricingCard, lightColors,Card ,CheckBox,Button ,} from '@rneui/themed';
const Payment = () => {


    const [selectedIndex, setIndex] = React.useState(0);
  return (
    <View containerStyle={{flex:1}}>
      
      {/* <PricingCard
        color={lightColors.secondary2}
        title="Payment"
        price="₹15000"
        info={['100 Users', 'One on One Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
        containerStyle={{height:'100%'}}
      /> */}
      <View>
      <Text style={{marginBottom:20,fontFamily:'',fontSize:25,fontWeight:'600',marginTop:20,marginLeft:10}}>Address</Text>
      <Card containerStyle={{borderRadius:20}}>
        <Text style={{marginBottom:20,fontFamily:'',fontSize:15}}>Adwaith</Text>
        <Card.Divider />
        <Text style={{marginBottom:20,fontFamily:'',fontSize:15}}>Gopan House</Text>
        <Card.Divider />
        <Text style={{fontFamily:'',fontSize:15}}>9048407795</Text>
      </Card>

      </View>


      <View>
      <Text style={{marginBottom:20,fontFamily:'',fontSize:25,fontWeight:'600',marginTop:20,marginLeft:10}}>Payment Method</Text>
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