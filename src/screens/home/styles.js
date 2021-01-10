import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title:{
        fontSize: 80,
        fontWeight: 'bold',
        color: '#fff',
        width: '65%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: "#fff",
        height: 40,
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        width: Dimensions.get('screen').width - 20,
        position: 'absolute',
        top: 50,
        zIndex: 1,
        height: 60,
        borderRadius: 30,
    },
});

export default styles;