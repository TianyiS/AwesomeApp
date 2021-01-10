import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical:40
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedrooms:{
        marginVertical: 10,
        color: 'grey',
    },
    discription:{
        fontSize: 18,
        lineHeight: 24
    },
    prices: {
        fontSize: 18,
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