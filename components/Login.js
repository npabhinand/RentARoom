import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import { auth } from "../firebase";

export default function Login({navigation}) {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // useEffect(() => {
  //   const unsubscribe=auth.onAuthStateChanged(user=>{
  //     if(user){
  //       console.log("Auto login")
  //       navigation.navigate("HomeScreen")
  //     }
  
  //   }
  //   )
  //   return unsubscribe
  // }
  //   ,[])

  const handleLogin = () => {
    // clg
    console.log(email,password)
  
    // your signup logic here
    auth
    .signInWithEmailAndPassword(email,password)
    .then(UserCredentials =>{
      const user= UserCredentials.user;
      console.log("login Successfully")
      navigation.navigate("HomeScreen")
    })
   .catch(error=>alert(error.message))
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>LOGIN</Text>

      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Username"  onChangeText={setEmail}/>
      </View>
      <View style={styles.inputView}>
         <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     
      <View style={{}}>
      <Text onPress={()=>navigation.navigate("SignUp")} style={{textAlign:'right'}}>Don't have an account? Sign Up</Text>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "20",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
    marginTop: 10,
    width: 300,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent:'center',
    
  },
  buttonText: {
    color: 'white',
    width: 200, 
    height: 20,  
    fontSize: 15,
    textAlign:'center'
  }
});
