import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50,
        margin: 10,
    },
    username: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        // width: '200%',
    },
    time: {
        fontSize: 16,
        color: 'grey'
    },
    midContainer: {
        justifyContent: 'space-around',
    }
});

export default style;