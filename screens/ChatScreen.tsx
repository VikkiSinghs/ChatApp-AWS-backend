import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import chatRooms from '../data/ChatRooms';
import NewMessageButton from "../components/NewMessageButton";
import {
  API,
  graphqlOperation,
  Auth,
} from 'aws-amplify';
import {useEffect, useState} from "react";
import { getUser } from './queries';

export default function ChatScreen() {
  
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)
        // console.log(userData.data.getUser.chatRoomUser.items);

      } catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
     {/* <ChatListItem chatRoom={chatRooms[0]}/> */}
     <FlatList 
      style={{width: '100%'}}
      data={chatRooms}
      renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
      keyExtractor={(item) => item.id}
      />
      <NewMessageButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
