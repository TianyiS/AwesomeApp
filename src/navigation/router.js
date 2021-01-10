import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './homeTabNavigator'
import DestinationSearchScreen from '../screens/destinationSearch';
import GuestsScreen from '../screens/guests';
import SearchResultScreen from '../screens/searchResult'
import PostScreen from "../screens/postScreen";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={'Home'} 
                    component={HomeTabNavigator} 
                    options={{
                        headerShown: false
                        }}
                    />
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: "Search your destination"
                    }}
                />
                <Stack.Screen
                    name={"Guests"}
                    component={GuestsScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
                <Stack.Screen
                    name={"SearchResult"}
                    component={SearchResultScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"DetailedPost"}
                    component={PostScreen}
                    options={{
                        title: "Accommodation"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;