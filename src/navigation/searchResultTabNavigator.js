import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/searchResult';
import SearchResultMapScreen from '../screens/searchResultMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResultScreen} />
            <Tab.Screen name={'map'} component={SearchResultMapScreen} />

        </Tab.Navigator>
    );
};


export default SearchResultTabNavigator;