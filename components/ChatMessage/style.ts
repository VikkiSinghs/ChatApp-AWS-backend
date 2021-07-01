import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles= StyleSheet.create({
    container: {
        padding: 10,

    },
    messageBox: {
        // backgroundColor: '#f9e5bc',
        // marginRight: 50,
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },
    time: {
        alignSelf: "flex-end",
        color: 'grey',
    },
    message: {

    }
});

export default styles;