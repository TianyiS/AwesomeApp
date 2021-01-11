import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';


const ProfileScreen = (props) => {
    const logout = () => {
        Auth.signOut();
    }

    return (
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={{
                width: '100%',
                height: 40,
                backgroundColor: '#c3c3c3',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={logout}
            >
                <Text>Log Out</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;
