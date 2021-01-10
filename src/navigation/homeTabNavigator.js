import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/home';
import ExploreNavigator from './exploreNavigator';
import SearchResultMapScreen from '../screens/searchResultMap';
import PostScreen from '../screens/postScreen';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Explore'} component={ExploreNavigator} options={
                {tabBarIcon: () => (
                    <Fontisto name='search' size={25} color={'#f15454'} />
                )}
               }
            />

            <Tab.Screen name={'Saved'} component={HomeScreen} options={
                {tabBarIcon: () => (
                    <FontAwesome name='heart-o' size={25} color={'#f15454'} />
                )}
               }
            />

            <Tab.Screen name={'Airbnb'} component={HomeScreen} options={
                {tabBarIcon: () => (
                    <FontAwesome5 name='airbnb' size={25} color={'#f15454'} />
                )}
               }
            />

            <Tab.Screen name={'Messages'} component={HomeScreen} options={
                {tabBarIcon: () => (
                    <Feather name='message-square' size={25} color={'#f15454'} />
                )}
               }
            />

            <Tab.Screen name={'Profile'} component={HomeScreen} options={
                {tabBarIcon: () => (
                    <EvilIcons name='user' size={25} color={'#f15454'} />
                )}
               }
            />
        </Tab.Navigator>
    )
};

export default HomeTabNavigator;