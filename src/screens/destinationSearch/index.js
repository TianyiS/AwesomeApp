import React, { useState } from 'react';
import {  View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './suggestionRow';

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>       
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    navigation.navigate('Guests');
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput,
                }}
                query={{
                    key: 'AIzaSyAy3BVBsEGP8BEPyKl8H7hnhUNuKYFMVws',
                    language: 'en',
                    type: '(cities)',
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item = {item}></SuggestionRow>}
            />   

      </View>
    );
}

export default DestinationSearchScreen;
