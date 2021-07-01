import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {View,TouchableOpacity} from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import {useNavigation} from '@react-navigation/native';

const NewMessagebutton = () => {

        const navigation = useNavigation();
        // const navigation = useNavigation('Conact');

    const onPress = () => {
        navigation.navigate('Contact');

    }



    return (
        <View style ={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons
                name="message-reply-text"
                size={28}
                color="white"
                />
        </TouchableOpacity>
    </View>
    )
}

export default NewMessagebutton;