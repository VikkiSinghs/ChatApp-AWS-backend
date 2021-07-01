import React ,  { useState }from "react";
import {View,Text, TextInput} from "react-native";
import styles from "./style";

import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';
import { TextInputChangeEventData } from "react-native";
import { TouchableOpacity } from "react-native";
const InputBox = () => {

    const [message, setMessage] = useState( '');

    const onMicrophonePress = () => {
        console.warn('message: audio')
    }

    const onSendPress = () => {
        console.warn( 'Sending: message')
        //send message to backend
        // setMessage:(value: '') =>()
        }

    const onPress = () => {
        if(!message){
            onMicrophonePress();
        }
        else{
            onSendPress();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name= "laugh-beam" size={24} color="grey" />
                
                <TextInput 
                placeholder={"Type a message"}
                style={styles.textInput}
                multiline
                value={message}
                onChangeText={setMessage}
                />
                
                <Entypo name= "attachment" size={24} color="grey" style={styles.icon}/>
                {!message &&<Fontisto name= "camera" size={24} color="grey" style={styles.icon}/>}
            </View>

        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
               {!message
               ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
               : <MaterialCommunityIcons name="send" size={28} color="lime" />
            }
            </View>
       </TouchableOpacity>
        </View>
    )
}

export default InputBox;