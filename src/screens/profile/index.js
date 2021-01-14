import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';


const ProfileScreen = (props) => {
    const logout = () => {
        Auth.signOut();
    }

    return (
        <View style={{height: '195%', justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={{
                width: '100%',
                height: 40,
                backgroundColor: '#EC7211',
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
