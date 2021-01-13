import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/searchResult';
import SearchResultMapScreen from '../screens/searchResultMap';
import { useRoute, useRouter } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {
    const route = useRoute();
    // console.log(route);
    const { guests } = route.params;

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'} >
                {() => (
                    <SearchResultScreen guests={guests}/>
                )}
            </Tab.Screen>
            <Tab.Screen name={'map'} >
                {() => (
                    <SearchResultMapScreen guests={guests}/>
                )}            
            </Tab.Screen>

        </Tab.Navigator>
    );
};


export default SearchResultTabNavigator;