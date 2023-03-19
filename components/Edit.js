import { View, Text,TextInput,StyleSheet ,ScrollView,TouchableOpacity,Image } from 'react-native';
import { Avatar, ListItem, Button,ButtonGroup,Slider,Icon } from "@rneui/themed";
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import ImagePicker from 'react-native-image-picker';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const Edit = ({ navigation }) => {
const [houseName, sethouseName] = useState('');
  
  
  
 
  // const [location, setLocation] = useState('');
    const [type,setType] = useState('');
    const [price, setPrice] = useState('');
    const [gender,setGender]=useState('')
    const [furniture,setFurniture]=useState('')
    const [food,setFood]=useState('');
    const [water,setWater] =useState('');
    const [total, setTotal] = useState('');
    const [bedroom,setBedroom]=useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');


const interpolate = (start, end) => {
  let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
  return Math.ceil((1 - k) * start + k * end) % 256;
};

    const color = () => {
    //   let r = interpolate(255, 0);
    //   let g = interpolate(0, 255);
    //   let b = interpolate(0, 0);
    //   return `rgb(${r},${g},${b})`;
    };

    const [value, setValue] = useState(0);
    const [vertValue, setVertValue] = useState(0);

    
   
  return (
    <View style={styles.container}>
    <ScrollView>
    <Text style={styles.subhead}>
        Property Type
      </Text> 
      <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, type === 'Hostel' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setType('Hostel')}>
                    <Text style={[styles.btnText, type === 'Hostel' ? { color: "white" } : null]}>Hostel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, type === 'House' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setType('House')}>
                    <Text style={[styles.btnText, type === 'House' ? { color: "white" } : null]}>House</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, type === 'Room' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setType('Room')}>
                    <Text style={[styles.btnText, type === 'Room' ? { color: "white" } : null]}>Room</Text>
                </TouchableOpacity>
                
            </View>
    <Text style={styles.subhead}>House Name</Text>
            <TextInput placeholder="House Name:" style={styles.input}></TextInput>

            {/*  */}
            {/*  */}
            <Text style={styles.subhead}>
        Accomodation For
      </Text> 
      <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, gender === 'Boys' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setGender('Boys')}>
                    <Text style={[styles.btnText, gender === 'Boys' ? { color: "white" } : null]}>Boys</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, gender === 'Girls' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setGender('Girls')}>
                    <Text style={[styles.btnText, gender === 'Girls' ? { color: "white" } : null]}>Girls</Text>
                </TouchableOpacity>
                
                
            </View>




            {/*  */}
            <Text style={styles.subhead}>Price: {price}</Text>
            <View style={[styles.contentView]}>
            <Slider
        value={price}
        onValueChange={setPrice}
        maximumValue={20000}
        minimumValue={1000}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 10, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={{ bottom: 10, right: 10 }}
              color={color()}
            />
          ),
        }}
      />
      </View>
            
            {/*  */}

            {/*  */}
            <Text style={styles.subhead}>Total Accomodation</Text>

            <TextInput style={styles.input} placeholder="Enter Total Accomodation" value={price} onChangeText={setPrice}/>
               
            {/*  */}
            <Text style={styles.subhead}>
       Total Bedrooms
      </Text> 
      <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, bedroom === 1 ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setBedroom(1)}>
                    <Text style={[styles.btnText, bedroom === 1 ? { color: "white" } : null]}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, bedroom === 2 ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setBedroom(2)}>
                    <Text style={[styles.btnText, bedroom === 2 ? { color: "white" } : null]}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, bedroom === 3 ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setBedroom(3)}>
                    <Text style={[styles.btnText, bedroom ===3 ? { color: "white" } : null]}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, bedroom === 4 ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setBedroom(4)}>
                    <Text style={[styles.btnText, bedroom ===4 ? { color: "white" } : null]}>4</Text>
                </TouchableOpacity>
                    auth
                
            </View>
            
          

            <Text style={styles.subhead}>
        Furniture
      </Text> 
      <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, furniture === 'Fully-Furnished' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setFurniture('Fully-Furnished')}>
                    <Text style={[styles.btnText, furniture === 'Fully-Furnished' ? { color: "white" } : null]}>Fully-Furnished</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, furniture === 'Semi-Furnished' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setFurniture('Semi-Furnished')}>
                    <Text style={[styles.btnText, furniture === 'Semi-Furnished' ? { color: "white" } : null]}>Semi-Furnished</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, furniture === 'No-furnished' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setFurniture('No-furnished')}>
                    <Text style={[styles.btnText, furniture === 'No-furnished' ? { color: "white" } : null]}>No-furnished</Text>
                </TouchableOpacity>
                
                
            </View>
            


            <Text style={styles.subhead}>
        Food
      </Text>

            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, food === 'Yes' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setFood('Yes')}>
                    <Text style={[styles.btnText, food === 'Yes' ? { color: "white" } : null]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, food === 'No' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setFood('No')}>
                    <Text style={[styles.btnText, food === 'No' ? { color: "white" } : null]}>No</Text>
                </TouchableOpacity>
                </View>


                <Text style={styles.subhead}>
         Water
      </Text>

            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, water === 'Yes' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setWater('Yes')}>
                    <Text style={[styles.btnText, water === 'Yes' ? { color: "white" } : null]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, water === 'No' ? { backgroundColor: "#4F9FA0" } : null]} onPress={() => setWater('No')}>
                    <Text style={[styles.btnText, water === 'No' ? { color: "white" } : null]}>No</Text>
                </TouchableOpacity>
                </View>
              

      

      

     {/* <GooglePlacesAutocomplete
      placeholder='location'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
      currentLocation={true}
      currentLocationLabel='Current location'
    /> */}
    <Text style={styles.subhead}>Description</Text>   
    <TextInput
    multiline={true}
    placeholder="Enter Description"
    numberOfLines={6}
    value={description}
    onChangeText={setDescription}
    style={{borderColor:'black',borderWidth:1,borderRadius:10,padding:10, width:'90%',
        height: 100,marginLeft:10}}
    
    /> 
    <Text style={styles.subhead}>Add Images</Text>
       <TouchableOpacity  style={{width:150,height:150,borderWidth:1,alignItems:'center',justifyContent:'center',borderColor:'',marginLeft:10}}>

<Text style={styles.buttonText}></Text>
<Icon
       
        name='plus'
        type='font-awesome'
        color='#4F9FA0'
        onPress={() => console.log('hello')} 
        containerStyle={{size:50}}

        />
        <Text>Add Images</Text>
</TouchableOpacity>    


    
    <View style={{alignItems:'center',marginTop:20,marginBottom:20}}>
    <TouchableOpacity style={{backgroundColor:"#4F9FA0",width:'90%',borderWidth:.25}} onPress={() => setWater('No')}>
                    <Text style={{textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14}}>Add Property</Text>
                </TouchableOpacity>
    </View>

</ScrollView>
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({



    container:{
        flex:1,
        padding:10,
        backgroundColor:'#e5e5fe',
        alignItems:'center',
        marginLeft:20
        // justifyContent:'center'
    },

    input: {
        width: '95%',
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop:20,
        marginLeft:10,
        marginBottom: 20,
        borderRadius: 10,
        
      },
      head: {
        fontSize:20,
        textAlign:'center',
        padding:10,
        marginLeft:10
        
      },subhead:{
        fontSize:20,
        fontWeight:'500'
        ,marginLeft:20,
        marginBottom:20,
        marginTop:20
      }
      , container: {
        flex: 1,
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#6B7280'
    },
    btn: {
        flex: 1,
        borderWidth:.25,
        borderColor: '#6B7280',
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14
    },
    contentView: {
        padding: 20,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'stretch',
      }
    
    
  });





