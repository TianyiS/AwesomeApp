import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import DetailedPost from '../../components/detailedPost';
import places from '../../../assets/data/feed';
import { useRoute } from "@react-navigation/native";
import { useRef } from 'react/cjs/react.development';


const PostScreen = (props) => {

    const route = useRoute();
    // console.log(route.params); output: postId.
    const post = places.find(place => place.id === route.params.postId);


    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={post} />
        </View>
    );
};

export default PostScreen;
