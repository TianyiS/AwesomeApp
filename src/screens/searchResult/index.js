import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
// import feed from '../../../assets/data/feed';
import Post from '../../components/Post';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const SearchResultScreen = (props) => {
    console.log(props);
    const { guests, viewport } = props;

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql (
                    graphqlOperation(listPosts, {
                        filter : {
                            and : {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [viewport.southwest.lat, viewport.northeast.lat]
                                }, 
                                longitude: {
                                    between: [viewport.southwest.lng, viewport.northeast.lng]
                                }
                                
                            }
                        }
                    })
                )
                setPosts(postsResult.data.listPosts.items)
            } catch(e) {
                console.log(e)
            }
        }
        fetchPosts();
    }, []) 
    return (
        <View>
            <FlatList 
                data={posts}
                renderItem={({item}) => <Post post={item} />}
            />
        </View>
    );
};

export default SearchResultScreen;