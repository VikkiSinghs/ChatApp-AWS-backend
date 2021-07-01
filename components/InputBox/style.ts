import {StyleSheet} from "react-native";
import  Colors  from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',

    },

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 50,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        flex:1,
        marginHorizontal: 10,
        width:4
    },
    icon: {
        marginHorizontal: 5,

    },
    buttonContainer: {
        backgroundColor: 'grey',
        borderRadius: 50,
        width: 40,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default styles; 