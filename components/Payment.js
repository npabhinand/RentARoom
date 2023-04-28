import { View, Text, Linking} from 'react-native'
import React from 'react'
import {Card ,CheckBox,Button ,} from '@rneui/themed';
// import AllInOneSDKManager from 'paytm_allinone_react-native';
import { NativeModules } from 'react-native';
import { StripeProvider, useStripe} from '@stripe/stripe-react-native';
import {PlatformPayButton, usePlatformPay} from '@stripe/stripe-react-native';
import RNUpiPayment from 'react-native-upi-payment'
const axios = require("axios")
const PUB_KEY = "pk_test_51MyY9YSHEkK5jAchHNk8gBIVwXj2EOMg45f3ScjEkQrVcDcBrkeYcrrt5pm1zqETxjRp9u4zvf9AqfhilWvag3yX00mNpHsSmy"
const SECRET = "sk_test_51MyY9YSHEkK5jAchvYr31SNm4XMeAwzEuJl2bzbKTnYeiedUJyYjoLpEJYK9UjqddrxDciIEPSOSX8NNhupSbZ4P00sBtXhhY5"


const Payment = ({ navigation,route }) => {
  // const { initPaymentSheet, presentPaymentSheet } = useStripe();
//   const {
//     isPlatformPaySupported,
//     confirmPlatformPayPayment,
//   } = usePlatformPay();
// const { isPlatformPaySupported } = usePlatformPay({googlePay: true});

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
        const res = await axios.post("http://192.168.1.38:5000/intents/", {amount: amount}).catch((error) => console.log(error, "ER"))
        return res.data.paymentIntent
      }
      console.log(index, "INdex")
      if(index == 0)
        {
          const customerSecret = await initCustomerPayment(4005 * 100)
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
        console.log("Payment Success")
      }
      else if(index == 1) {
        console.log("UPI Payment selected.")
        const state={
          Status:"", 
          txnId:"",
          GOOGLE_PAY:'GOOGLE_PAY',
          PHONEPE:'PHONEPE',
          PAYTM:'PAYTM',
                message:""
      }
      var UPI = "upi://pay?pa=" + "7025665927@paytm" + "&pn=" + "Nelwin George"
        +"&tid=" + "1564" + "&tr=" + "87767"
        + "&tn=" + "Note" + "&am=" + "100" + "&cu=" + "INR"
        + "&url=" + "www.google.com";
      UPI =  UPI.replace(" ", "+");
      console.log(UPI)
      Linking.openURL(UPI)
        // RNUpiPayment.initializePayment({                
        //   vpa: '7025665927@paytm', // or can be john@ybl or mobileNo@upi                        
        //   payeeName: 'Payee Name',                
        //   amount: '1',                
        //   transactionRef: '121313'},successCallback,failureCallback, state.GOOGLE_PAY);//declare the functions successCallback and failureCallback to handle the response from the UPI application.
        
        
        // const { isPlatformPaySupported } = usePlatformPay();
        // const customerSecret = await initCustomerPayment(4005 * 100)
        // if (!(await isPlatformPaySupported({ googlePay: {testEnv: true} }))) {
        //   Alert.alert('Google Pay is not supported.');
        //   return;
        // }

      //   const { error } = await confirmPlatformPayPayment(
      //     clientSecret,
      //     {
      //       googlePay: {
      //         testEnv: true,
      //         merchantName: 'RentARoom',
      //         merchantCountryCode: 'IN',
      //         currencyCode: 'INR',
      //         billingAddressConfig: {
      //           format: PlatformPay.BillingAddressFormat.Full,
      //           isPhoneNumberRequired: true,
      //           isRequired: true,
      //         },
      //       },
      //     });
        
      //     if(error) {
      //       Alert.alert(error.code, error.message);
      //       // Update UI to prompt user to retry payment (and possibly another payment method)
      //       return;
      //     }
        
      //   Alert.alert('Success', 'The payment was confirmed successfully.');
          
      // }
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
            onPress={()=> makePayment(selectedIndex)}></Button>
    </StripeProvider>
    </View>

    
   
    
  )
}
export default Payment