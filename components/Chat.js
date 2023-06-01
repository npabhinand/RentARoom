import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db, firebase } from '../firebase';
import { GiftedChat, Avatar } from 'react-native-gifted-chat';

const Chat = ({ navigation, route }) => {
  const { item, userD } = route.params;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .orderBy('time', 'desc')
      .onSnapshot((snapshot) => {
        const chatsData = snapshot.docs.map((doc) => doc.data());
        setChats(chatsData);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const onSend = async (messages) => {
    try {
      const newMessage = messages[0];
      const chatMessage = {
        _id: newMessage._id,
        time: new Date().getTime(),
        text: newMessage.text,
        studentId: userD.email,
        ownerId: item.OwnerId,
      };

      await db.collection('chats').add(chatMessage);
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.ownerContainer}>
        <Text style={styles.ownerText}>{item.OwnerId}</Text>
        <Text style={{ fontWeight: '200' }}>{item.houseName}</Text>
      </View>
      <GiftedChat
        messages={chats}
        onSend={messages => onSend(messages)}
        user={{
          _id: userD.uid,
          avatar: userD.imageURL // Add the avatar URL for the user
        }}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ownerContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    height: 70,
  },
  ownerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: '#777777',
  },
});

export default Chat;
