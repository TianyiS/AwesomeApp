import React, { useState, useEffect, useRef }from 'react';
import { View, Text, FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import CustomMarker from '../../components/customMaker';
import PostCarouselItem from '../../components/postCarouselItem';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

// import places from '../../../assets/data/feed';



const SearchResultMapScreen = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const [posts, setPosts] = useState([]);
    const { guests } = props;


    const flatlist = useRef();
    const map = useRef();

    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
        if(viewableItems.length > 0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }
    })

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql (
                    graphqlOperation(listPosts, {
                        filter:  {
                            maxGuests: {
                                ge: guests
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

    useEffect(() => {
        if(!selectedPlaceId || !flatlist) {
            return;
        }
        const index = posts.findIndex(place => place.id === selectedPlaceId);
        flatlist.current.scrollToIndex({index:index});

        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);

    }, [selectedPlaceId])

    return (
        <View>
            <MapView
                ref={map}
                style={{height: '100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                latitude: 28.3279822,
                longitude: -16.5124847,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
                }}
            >   
                {posts.map(place => (
                    <CustomMarker
                        key={place.id}
                        coordinate={{latitude: place.latitude, longitude: place.longitude}}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}
            </MapView>    

            <View style={{position: 'absolute', bottom: 10}}>
                    <FlatList 
                        ref={flatlist}
                        data={posts}
                        renderItem={({item}) => <PostCarouselItem post={item} key={item.id}/>}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        viewabilityConfig={viewConfig.current}
                        onViewableItemsChanged={onViewChanged.current}
                    />
            </View> 
        </View>
    );
}

export default SearchResultMapScreen;