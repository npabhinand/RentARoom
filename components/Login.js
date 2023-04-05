
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,Button
} from "react-native";
import { Card } from "@rneui/base";
import { auth, db } from "../firebase";
import firebase from "firebase/app";
import "firebase/database";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, redirect according to user type
        console.log(user);
        const userType = user.metadata.userType;

        db.collection("users")
          .where("email", "==", user.email)
          .get()
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              const userD = querySnapshot.docs[0].data();
              console.log(userD.userType);

              if (userD.userType == "house owner") {
                console.log("true", userD.userType);

                navigation.navigate("OwnerHome",{userD});
              } else 
              {
                console.log("true1", userD.userType);
                navigation.navigate("HomeScreen",{userD});
              }
            }
          })
          .catch((err) => console.log(err));
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async() => {
    // clg
    console.log(email, password);

    // your signup logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((UserCredentials) => {
        const user = UserCredentials.user;
        console.log("login Successfully");

        // navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error.message));
  };
  // const togglePasswordVisibility = () => {
  //   setShowPassword(prevState => !prevState);
  // };

  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Image source={require('./assets/download.jpeg')} style={styles.image}/>
    </View>
    <Card containerStyle={styles.login}>
      <Text style={styles.head}>Login to your account</Text>
      
     <View style={{backgroundColor:'#FFFFFF', borderTopLeftRadius:40,
   borderTopRightRadius:40,width:400}}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword ? false : true}
        />
         {/* <Button
        title={showPassword ? "Hide Password" : "Show Password"}
        onPress={togglePasswordVisibility}
      /> */}
      </View>
      <Text style={styles.text}>
        Forgot Password?
        </Text>
       
     
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row',alignContent:'center'}}>
        <Text style={{  marginTop:20,marginLeft:100 }} >
          Don't have an account ? 
        </Text>
        <Text style={styles.text} onPress={()=>navigation.navigate("SignUp")}>  Register</Text>
       
      </View>
      </View>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#FFFFFF",
    // justifyContent: "center",
    alignItems: "center",
  },
  head: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "20",
    margin: 20,
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom:-10,
    borderColor:'#16C72E',
    alignSelf:'center'
  },
  inputView:{
      position:'relative',
      marginTop:35,
  },
  button: {
    backgroundColor: "#038E47",
    padding: 5,
    marginTop: 10,
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
  image:{
    width:400,
    height:250
  }
  ,text:{
    textAlign:'right',
    marginBottom:5,
    color:'#16C72E',
    marginTop:20,marginRight:50
  },
  login:{
    position:'absolute',
   backgroundColor:'#E4E4E4',
   width:'100%',
   marginTop:200,
   alignItems:'center',
   borderTopLeftRadius:40,
   borderTopRightRadius:40,
   
  }
});
