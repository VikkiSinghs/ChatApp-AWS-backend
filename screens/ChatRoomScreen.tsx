import React from "react";
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ChatRoomScreen = () => {

    const Route= useRoute();
    // console.log(Route.params)
    return (
        <Text>Chat Room</Text>
    )
}

export default ChatRoomScreen;