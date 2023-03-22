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
import { auth, db } from "../firebase";
import firebase from "firebase/app";
import "firebase/database";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>LOGIN</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setEmail}
        />
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
        <Text style={{ textAlign: "right" }} onPress={()=>navigation.navigate("SignUp")}>
          Don't have an account? Sign Up
        </Text>
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
    borderColor: "black",
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 5,
    marginTop: 10,
    width: 300,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    width: 200,
    height: 20,
    fontSize: 15,
    textAlign: "center",
  },
});
