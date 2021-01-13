import React, {useState, useEffect, useLayoutEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import DetailedPost from '../../components/detailedPost';
import places from '../../../assets/data/feed';
import { useRoute } from "@react-navigation/native";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

 

const PostScreen = (props) => {
    const route = useRoute();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql (
                    graphqlOperation(listPosts)
                )
                setPosts(postsResult.data.listPosts.items.find(post => post.id === route.params.postId))
            } catch(e) {
                console.log(e)
            }
        }
        fetchPosts();
    }, []) 
    // console.log(posts);
    // console.log(route.params);
    // console.log(post);
    // const post = posts.find(post => post.id === route.params.postId);

    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={posts} /> 
        </View>
    );
};

export default PostScreen;
