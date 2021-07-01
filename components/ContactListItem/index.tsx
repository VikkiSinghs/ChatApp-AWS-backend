import React from 'react';
import {Text,View,TouchableWithoutFeedback,Image} from 'react-native';
import {User} from "../../types";
import moment from "moment";
import styles from "./style";
// import {Users} from "../data/Users";
import { useNavigation } from '@react-navigation/native';


export type ContactListItem = {
    user: User;
}
const ContactListItem = (props: ContactListItem) => {
    const {user} = props;

    const navigation = useNavigation();

    const onClick = () => {
        //navigate to chatroom with this user
    }

       
    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style = {styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri:user.imageUri }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                         
                    </View>
                </View>

        </View>
        </TouchableWithoutFeedback>
    )

};


export default ContactListItem;