import { View, Text} from 'react-native'
import React from 'react'
import {Card ,CheckBox,Button ,} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AllInOneSDKManager from 'paytm_allinone_react-native';
import { NativeModules } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const Payment = ({ navigation,route }) => {
  const {item} = route.params;
      console.log('-----',item)
    const [selectedIndex, setIndex] = React.useState(0);
        const orderId=item.propertyId 

    
    const makePayment =  () => {
      var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_khUmCYzgRhD0o3', // Your api key
        amount: '5000',
        name: 'foo',
        order_id: orderId,
        prefill: {
          email: 'void@razorpay.com',
          contact: '9191919191',
          name: 'Razorpay Sware'
        },
        theme: {color: '#F37254'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        console.log(error)
        alert(`Error: ${error.code} | ${error.description}`);
      });
    }

      
  
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

    
            <Button title="Proceed to payment" color="#4F9FA0" buttonStyle={{height:50,width:'95%',marginTop:20,marginLeft:10,borderRadius:10}}
            onPress={makePayment}></Button>
    </View>

    
   
    
  )
}

export default Payment