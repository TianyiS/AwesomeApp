import React, { useState, useEffect, useRef }from 'react';
import { View, Text, FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import CustomMarker from '../../components/customMaker';
import PostCarouselItem from '../../components/postCarouselItem';

import places from '../../../assets/data/feed';



const SearchResultMapScreen = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState()

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
        if(!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId);
        flatlist.current.scrollToIndex({index:index});

        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
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
                {places.map(place => (
                    <CustomMarker
                        key={place.id}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}
            </MapView>    

            <View style={{position: 'absolute', bottom: 10}}>
                    <FlatList 
                        ref={flatlist}
                        data={places}
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