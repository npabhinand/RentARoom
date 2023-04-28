import { TouchableOpacity,Text,View,Image,Navigation} from 'react-native';
import back from "./assets/back.png";
import { Avatar,ListItem ,Button,Card } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { useEffect,useState } from 'react';
import {  db } from "../firebase";


export default function Notification(props){
  const userD = props.userD;
  const [data, setData] = useState([]);
  const studentId=userD.email
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
const [isUpdated, setIsUpdated] = useState(false); 
  useEffect(() => {
    const fetchData = async () => {
      const bookingSnapshot = await db.collection("booking").where("studentId", "==", studentId).where("status","==","accepted").get();
      const bookingDataArray = [];
      const promises = [];
      bookingSnapshot.forEach((bookingDoc) => {
        const bookingData = bookingDoc.data();
        const ownerDetails=bookingData.ownerId
        bookingDataArray.push({ ...bookingData, bookId: bookingDoc.id });
  
        const ownerRef = db.collection("users").where("email", "==", ownerDetails);
        // Add a promise that resolves when both the booking data and owner data are fetched
        promises.push(
          Promise.all([
            ownerRef.get(),
            Promise.resolve({ ...bookingData, bookId: bookingDoc.id })
          ]).then(([ownerSnapshot, bookingData]) => {
            const ownerData = ownerSnapshot.docs[0].data(); // Use docs[0] to get the first result
            bookingData.owner = ownerData;
            return bookingData;
          }) 
        );
      });
  
      // Wait for all promises to resolve before setting the state with the combined data
      Promise.all(promises).then((bookingDataArray) => {
        setData(bookingDataArray);
        setIsLoading(false);
      }).catch((error) => {
        console.log("Error getting documents: ", error);
        setIsLoading(false);
      });
      
    };
  
    fetchData();
  }, [isUpdated]); 


return (
     <View>
  
       <View style={{flexDirection:"row", padding:10,alignItems:'center'}}>
     <TouchableOpacity>
        <Image source={back} style={{width: 50,height: 50,borderRadius: 50,overflow: "hidden"}}></Image>
        </TouchableOpacity>
        <Text style={{padding:10,fontSize:30}}>Your {'\n'}Notification</Text>
     </View>
     {data && data.map((item, index) => (
     <Card key={index} containerStyle={{borderRadius:10}}>
     <View style={{flexDirection:'row',marginRight:10,marginBottom:20}}>
     <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
  <Text style={{marginLeft:10,fontSize:15,marginRight:10,fontWeight:'500'}}>Owner {item.owner.name} accepted your request on property name {item.houseName}</Text>
  </View>
{/*   
    <View style={{flexDirection:'row',alignItems:'center',marginRight:10,justifyContent:'space-between',marginLeft:10,marginBottom:10}}>
    <Text>Contact Number</Text>
     <Text>{item.owner.phone}</Text>
     </View> */}
     <View>
     <Button title="Make Payment" containerStyle={{borderRadius:10,width:250,alignSelf:'center'}} titleStyle={{fontSize:18,fontWeight:'600'}} 
     onPress={() => navigation.navigate('Payment',{item})}></Button>
    </View>
     </Card>
))}
</View>
);
}