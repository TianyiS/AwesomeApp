import React from 'react';
import { Text, View, Image, useWindowDimensions, Pressable, } from 'react-native';
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native'

const PostCarouselItem = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('DetailedPost', {postId: post.id});
    }

    return (
        <Pressable onPress={goToPostPage} style={[styles.container,{width: width - 60}]}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{url: post.image}}/>

                <View style={{flex: 1, marginHorizontal: 10}}>
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
                    <Text style={styles.discription} numberOfLines={2}>{post.type}. {post.title}.
                    </Text>
                    <Text style={styles.prices}>
                        {/* <Text style={styles.oldPrice}>${post.oldPrice}</Text> */}
                        <Text style={styles.newPrice}> ${post.newPrice} </Text>
                        / night
                    </Text>
                    {/* <Text style={styles.totalPrice}>${post.totalPrice} total</Text> */}
                </View>
            </View>
        </Pressable>
    );
}

export default PostCarouselItem;