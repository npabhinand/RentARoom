import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from "react";
import {db}from '../firebase'


export default function HostelCards(props) {
  const navigation = useNavigation();
  const userD = props.userD;
  const [data, setData] = useState([]);
userD.email
  useEffect(() => {
   
    const collectionRef = db.collection('property').where("type","==","Hostel");
    collectionRef.get().then((querySnapshot) => {
      const dataArray = [];
      let docIndex = 0;
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
        dataArray[docIndex].propertyId = doc.id;
        docIndex++;
      });
      setData(dataArray);
    }).catch((error) => {
      console.log('Error getting documents:', error);
    });

    const userId = userD.email;
    const wishlistRef = db.collection("wishlist");
    wishlistRef.where("userId", "==", userId).get().then((querySnapshot) => {
      const wishlistItems = querySnapshot.docs.map((doc) => doc.data().propertyId);
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          isWishlisted: wishlistItems.includes(item.propertyId.toString()),
        }))
      );
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }, []);

  const [color, setColor] = useState("white");

  const handleWishlist = (propertyId, index) => {
    const userId = userD.email;
    const wishlistRef = db.collection("wishlist");

    const item = data[index];
    const isWishlisted = !item.isWishlisted;

    if (isWishlisted) {
      wishlistRef.add({
        userId: userId,
        propertyId: propertyId.toString(),
      }).then(() => {
        setData((prevData) =>
          prevData.map((item, i) =>
            i === index ? { ...item, isWishlisted: true } : item
          )
        );
      }).catch((error) => {
        console.log("Error adding document: ", error);
      });
    } else {
      wishlistRef.where("userId", "==", userId).where("propertyId", "==", propertyId.toString()).get().then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.docs[0].ref.delete().then(() => {
            setData((prevData) =>
              prevData.map((item, i) =>
                i === index ? { ...item, isWishlisted: false } : item
              )
            );
          }).catch((error) => {
            console.log("Error deleting document: ", error);
          });
        }
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    }
  
  }
  const book = async (item) => {
    const formData = {
      studentId: userD.email,
      ownerId: item.OwnerId,
      propertyId: item.propertyId,
      status: "pending",
      houseName: item.houseName,
      price:item.price
    };

    try {
      
      const response = await db.collection("booking").add(formData);
      console.log("Form data submitted successfully:", response);
      ToastAndroid.show('Property is booked successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.log("Error submitting form data:", error);
      ToastAndroid.show('Property is not booked', ToastAndroid.SHORT);
    }
  };

  return (
    
    <SafeAreaView>
        {data && data.map((item, index) => (
        <Card  key={index} containerStyle={{ width:'100%', height: 150, borderRadius: 10 ,padding:10,alignSelf:'center'}}>
        <TouchableOpacity  >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{uri:item.Images[0]}}
              resizeMode="cover"
              style={{
                width: "55%",
                height: 150,
                marginLeft: -15,
                marginTop: -15,
                marginTop:-10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
            <View
              style={{
                position: "absolute",
                left: 125,
                top: -10,
              }}
            >
              <TouchableOpacity>
              <Icon
  name="heart"
  type="font-awesome"
  onPress={() => handleWishlist(item.propertyId, index)}
  color={item.isWishlisted ? "red" : "white"} // Use isWishlisted property to determine color
  size={25}
/>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
            {/* <Text style={{ fontSize: 18,fontWeight:'200',marginBottom:10}}>{item.type}</Text> */}
              <Text style={{ fontSize: 18,fontWeight:'500' ,marginBottom:10}}>{item.houseName}</Text>
             
            
              <View style={{ flexDirection: "row" }}>
                <Text></Text>
               
                 <Text style={{ fontSize: 15 }}>{item.gender}</Text>
                 <Icon
                  name="star"
                  color="#FFD700"
                  iconStyle={{ alignSelf: "flex-start" }}
                />
                <Text> 4.5</Text>
               
              </View>
              <Text style={{fontSize:18,fontWeight:'200',textDecorationLine:'underline'}}
            onPress={() => navigation.navigate("HouseDetails",{item:item, userD: userD})}>Show Details</Text>
          
          <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between',}}>
            <Text style={{ color: '#2637C3',fontSize:18,marginTop:5 }}>₹{item.price}</Text>
            <Button title='Book' color='#2637C3' containerStyle={{borderRadius:10,width:75,}} onPress={()=> book(item=item,index)}/>
           </View>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      
      ))}
    </SafeAreaView>
   
  );
}
