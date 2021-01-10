import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    image: {
        height: '100%',
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
    },
    bedrooms:{
        marginVertical: 10,
        color: 'grey',
    },
    discription:{
        fontSize: 16,
        lineHeight: 16
    },
    prices: {
        fontSize: 16,
        marginVertical: 10,
    },
    oldPrice :{
        color: 'grey',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold'
    },
    totalPrice: {
        color: 'grey',
        textDecorationLine: 'underline',
    },
})

export default styles;