import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {auth,db}from '../firebase'
import { SelectList } from 'react-native-dropdown-select-list'

// import RNPickerSelect from 'react-native-picker-select';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'students'},
      {key:'2', value:'house owner'},
      
  ]
  
  
  const handleSignUp = async() => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user=userCredentials.user;
      console.log(user.email)
          db.collection('users').add({
      userType: selected,
      email: email,
      phone: phone,
      place: place,
      name: name
    }).then(doc=>console.log(doc)).catch(err=>console.log(err))
    // navigation.navigate("OwnerHome");
    })
    .catch(error=>alert(error.message))
    // your signup logic here
   
   
  };
  // const handlePasswordChange = (password) => {
  //   setPassword(password);
  // };
  
  // const handleConfirmPasswordChange = (confirmPassword) => {
  //   setConfirmPassword(confirmPassword);
  // };
  
  // const validatePassword = () => {
  //   if (password !== confirmPassword) {
  //     return false;
  //   }
  //   return true;
  // };


   
  return (
    
    <View style={styles.container}>
    <ScrollView>
    <Text style={styles.head}>Sign Up</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{marginBottom:10,width:}}
        dropdownStyles={{height:100}}
        onSelect={() => alert(selected)}
        search={false} 
        placeholder= "UserType"
    />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
  
      <TextInput
        style={styles.input}
        placeholder="phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="place"
        value={place}
        onChangeText={setPlace}
        keyboardType=""
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Text

      style={{alignItems:"center"}}
      onPress={()=>navigation.navigate("Login")}
      >
        Already an user?
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:'100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  head:{ 
    textAlign:'center',
    fontSize:25,
    padding: 10,
    fontSize:25
  },
  input: {
    width: '95%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom:15,
    borderColor:'#16C72E',
    alignSelf:'center'
  },inputView:{
    position:'relative',
    marginTop:20,
}, image:{
  width:350,
  height:200
},
  button: {
    backgroundColor: "#038E47",
    padding: 5,
    marginTop: 30,
    width: 350,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom:10,
    borderRadius:30
  },
  buttonText: {
    color: "white",
    // width: 200,
    height: 20,
    fontSize: 15,
    fontWeight:'500',
    textAlign: "center",
  },
  signup:{
    position:'absolute',
   backgroundColor:'#E4E4E4',
   width:'100%',
   marginTop:200,
   alignItems:'center',
   borderTopLeftRadius:40,
   borderTopRightRadius:40,
   marginTop:50
   
  },text:{
    textAlign:'right',
    marginBottom:5,
    color:'#16C72E',
    marginTop:10,marginRight:50
  },
});
export default SignUp;