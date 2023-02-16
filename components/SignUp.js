import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
// import RNPickerSelect from 'react-native-picker-select';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('item1');
  const [selected, setSelected] = useState(undefined);
  
  const userType = ["Student", "House Owner"]
  const handleSignUp = () => {
    // your signup logic here
   
  };

  return (
    
    <View style={styles.container}>
    <View >
    <Text style={styles.head}>SignUp</Text>
    <SelectDropdown dropdownStyle={{
    width: 200,
     
    borderColor: 'black',

    borderRadius: 10,
  }}
  buttonStyle={styles.input}
	data={userType}
  defaultButtonText="User type"
	onSelect={(selectedItem, index) => {
		
	}}


  
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
    </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="place"
        value={place}
        onChangeText={setPlace}
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
        value={password}
        onChangeText={setPassword}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head:{ 
    textAlign:'center',
    fontSize:20,
    padding: 10,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
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
  },
});

export default SignUp;
