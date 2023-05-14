import { View, Text, Linking,Alert,ToastAndroid} from 'react-native'
import React, { useEffect } from 'react'
import {Card ,CheckBox,Button ,} from '@rneui/themed';
import {db} from '../firebase'


import { PlatformPay, StripeProvider, useStripe} from '@stripe/stripe-react-native';
import {PlatformPayButton, usePlatformPay} from '@stripe/stripe-react-native';
// import RNUpiPayment from 'react-native-upi-payment'
const axios = require("axios")
const PUB_KEY = "pk_test_51MyY9YSHEkK5jAchHNk8gBIVwXj2EOMg45f3ScjEkQrVcDcBrkeYcrrt5pm1zqETxjRp9u4zvf9AqfhilWvag3yX00mNpHsSmy"
// const PUB_KEY = "pk_live_51MyY9YSHEkK5jAchVK6cJ3kD7KUqUwXSgSDhQlq2dk5YUZV9iZCWysvZAASI0R0fI2lKoWTCyF3OrVDJa6MIFRZz003ZJOYlwW"


const SECRET = "sk_test_51MyY9YSHEkK5jAchvYr31SNm4XMeAwzEuJl2bzbKTnYeiedUJyYjoLpEJYK9UjqddrxDciIEPSOSX8NNhupSbZ4P00sBtXhhY5"

import RazorpayCheckout from 'react-native-razorpay';
const Payment = ({ navigation,route }) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();


  const {
    isPlatformPaySupported,
    confirmPlatformPayPayment,
  } = usePlatformPay();


  useEffect(() => {
    (async function () {
      if (!(await isPlatformPaySupported({ googlePay: {testEnv: true} }))) {
        Alert.alert('Google Pay is not supported.');
        return;
      }
    })();
  }, []);


 

  const {item} = route.params;
      console.log('-----',item)
    const [selectedIndex, setIndex] = React.useState(99);
        const orderId=item.propertyId 

        function successCallback(data){
          //
          console.log(data);
          that.setState({Status:"SUCCESS"});
          that.setState({txnId:data['txnId']});
          that.setState({message:"Succccessfull payment"});
      }
      console.log(typeof successCallback == 'function')
      function failureCallback(data){
        console.log(data)
        // in case no action taken
        if (data['status']=="FAILURE"){
            that.setState({Status:"FAILURE"})
            that.setState({message:data['message']});
        }
        // in case of googlePay
        else if (data['Status']=="FAILURE"){
            that.setState({Status:"FAILURE"})
            that.setState({message:"app closed without doing payment"});;
        }
        // in case of phonepe
        else if (data['Status']=="Failed"){
            that.setState({Status:"FAILURE"});
            that.setState({message:"app closed without doing payment"});
        }
        // in case of phonepe
        else if(data['Status']=="Submitted"){
            that.setState({Status:"FAILURE"});
            that.setState({message:"transaction done but pending"});
        }
        // any other case than above mentioned
        else{
            that.setState({Status:"FAILURE"});
            that.setState({message:data[Status]});
        }
    }





    const makePayment = async (index) => {



      const initCustomerPayment = async (amount) => {
        console.log("Yes22", amount)
        const secret = null
        const res = await axios.post("http://192.168.29.114:5000/intents/", {amount: amount,country:"IND"}).catch((error) => console.log(error, "ER"))
        return res.data.paymentIntent
      }


      console.log(index, "INdex")
      if(index == 0)
        {
          const customerSecret = await initCustomerPayment(1 * 100)
          if(customerSecret == null) {
            console.log("Failed to get customer secret")
            return
        }
        const initResponse = await initPaymentSheet({
          merchantDisplayName: 'Rent-A-Room',
          paymentIntentClientSecret: customerSecret,
        });
        if (initResponse.error) {
          console.log(initResponse.error);
          Alert.alert('Something went wrong');
          return;
        }
        console.log("init fi")
        const paymentResponse = await presentPaymentSheet();
        console.log(paymentResponse)
        if (paymentResponse.error) {
          Alert.alert(
            `Error code: ${paymentResponse.error.code}`,
            paymentResponse.error.message
          );
          return;
        }
        console.log("Payment Success--")
        // const updateRef = db.collection('property').doc(item.propertyId);
        // try {
        //   await updateRef.update({ status: 'booked' });
        //   ToastAndroid.show('payment is successfull', ToastAndroid.SHORT);
        // } catch (error) {
        //   console.error('Error updating status: ', error);
        // }
        // const bookingRef = db.collection('booking').doc(item.bookId);
        // try {
        //   await bookingRef.update({ status: 'booked' });
        //   console.log('Booking status updated to accepted');
        //   ToastAndroid.show('Booking status updated to accepted', ToastAndroid.SHORT);
        // } catch (error) {
        //   console.error('Error updating booking status: ', error);
        // }

      }
      else if(index == 1) {
        console.log("UPI Payment selected.")
        

  
    }
    } 

  return (

    <View containerStyle={{flex:1}}>

    <StripeProvider
      publishableKey={PUB_KEY} >
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
   
         </View>
      </Card>
      </View>

      <View style={{flexDirection:'row',alignItems:'flex-end'}}>
      <Text style={{fontFamily:'',fontSize:25,fontWeight:'600',marginTop:20,marginLeft:10}}>Total</Text>
      <Text style={{fontFamily:'',fontSize:25,fontWeight:'bold',marginTop:20,marginLeft:10}}> ₹{item.price}</Text>
    </View>
         <Button 
         
         buttonStyle={{height:50,width:'95%',marginTop:20,marginLeft:10,borderRadius:10}}
         onPress={() => {


        var options = {
          description: 'Pay rent',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_live_N7qiUiy6l6EfIT', // Your api key
          amount: 10*100,
          name: item.owner.name,
          prefill: {
            email: 'contact@rentaroom.com',
            contact: '9191919191',
            name: 'RentAroom'
          },
          theme: { color: '#F37254' }
        }
        RazorpayCheckout.open(options).then(async (data) => {
  const updateRef = db.collection('property').doc(item.propertyId);
  try {
    await updateRef.update({ status: 'booked' });
    ToastAndroid.show('Payment is successful', ToastAndroid.SHORT);
  } catch (error) {
    console.error('Error updating status: ', error);
  }

  const bookingRef = db.collection('booking').doc(item.bookId);
  try {
    await bookingRef.update({ status: 'booked' });
    console.log('Booking status updated to accepted');
    ToastAndroid.show('Booking status updated to accepted', ToastAndroid.SHORT);
  } catch (error) {
    console.error('Error updating booking status: ', error);
  }

  alert(`Success: ${data.razorpay_payment_id}`);
}).catch((error) => {
  console.log(error);
  alert(`Error: ${error.code} | ${error.description}`);
})
         }}>
      <Text>Payment Now</Text>
      </Button>

            {/* <Button title="Proceed to payment" color="#4F9FA0" buttonStyle={{height:50,width:'95%',marginTop:20,marginLeft:10,borderRadius:10}}
            onPress={()=> makePayment(selectedIndex)}></Button> */}
    </StripeProvider>
    </View>




  )
}
export default Payment

// import React from 'react'
// import { Card, CheckBox, Button, } from '@rneui/themed';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   NativeModules,
//   NativeEventEmitter
  
// } from 'react-native';
// import RazorpayCheckout from 'react-native-razorpay';
// import {db} from '../firebase'
// const Payment = ({ navigation, route }) => {
//   const { item } = route.params;
//   console.log(item)
//   return (
//     <View>
//       <Text>Payment</Text>

//       <View>
//         <Text style={{ marginBottom: 20, fontSize: 25, fontWeight: '600', marginTop: 20, marginLeft: 20 }}>Address</Text>
//         <Card containerStyle={{ borderRadius: 20 }}> 
//                <Text style={{ marginBottom: 20, fontSize: 15 }}>{item.owner.name}</Text>

//           <Card.Divider /> 
//           <Text style={{ marginBottom: 20,  fontSize: 15 }}>{item.houseName}</Text>
//           <Card.Divider />
//           <Text style={{ fontSize: 15 }}>9048407795</Text>
//         </Card>

//       </View>
//       <Button onPress={() => {


//         var options = {
//           description: 'Credits towards consultation',
//           image: 'https://i.imgur.com/3g7nmJC.png',
//           currency: 'INR',
//           key: 'rzp_test_khUmCYzgRhD0o3', // Your api key
//           amount: 50*100,
//           name: item.owner.name,
//           prefill: {
//             email: 'contact@rentaroom.com',
//             contact: '9191919191',
//             name: 'RentAroom'
//           },
//           theme: { color: '#F37254' }
//         }
//         RazorpayCheckout.open(options).then((data) => {
          

//           // const updateRef = db.collection('property').doc(item.propertyId);
//         // try {
//         //   await updateRef.update({ status: 'booked' });
//         //   ToastAndroid.show('payment is successfull', ToastAndroid.SHORT);
//         // } catch (error) {
//         //   console.error('Error updating status: ', error);
//         // }
//         // const bookingRef = db.collection('booking').doc(item.bookId);
//         // try {
//         //   await bookingRef.update({ status: 'booked' });
//         //   console.log('Booking status updated to accepted');
//         //   ToastAndroid.show('Booking status updated to accepted', ToastAndroid.SHORT);
//         // } catch (error) {
//         //   console.error('Error updating booking status: ', error);
//         // }

//           alert(`Success: ${data.razorpay_payment_id}`);
//         }).catch((error) => {


//           // handle failure
//           console.log(error)
//           alert(`Error: ${error.code} | ${error.description}`);
//         });
//       }}>
//       <Text>Payment Now</Text>
//       </Button>

//     </View>
//   )
// }

// export default Payment