import React, { useState }from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const GuestsScreen = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation();
    
    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>

                <View style={styles.row} >
                    <View>
                        <Text style={{fontWeight:'bold', paddingBottom: 5}}>Adults</Text>
                        <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                        <Pressable 
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}
                        >
                        <Text style={{color: 'lightgrey', fontSize: 20}}>-</Text>
                        </Pressable>
                        <Text style={{marginHorizontal: 15, fontSize: 16}}>{adults}</Text>
                        <Pressable 
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                        <Text style={{color: 'lightgrey', fontSize: 20}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row} >
                    <View>
                        <Text style={{fontWeight:'bold', paddingBottom: 5}}>Children</Text>
                        <Text style={{color:'#8d8d8d'}}>Ages 2-12</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                        <Pressable 
                            onPress={() => setChildren(Math.max(0, children - 1))}
                            style={styles.button}
                        >
                        <Text style={{color: 'lightgrey', fontSize: 20}}>-</Text>
                        </Pressable>
                        <Text style={{marginHorizontal: 15, fontSize: 16}}>{children}</Text>
                        <Pressable 
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        >
                        <Text style={{color: 'lightgrey', fontSize: 20}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row} >
                    <View>
                        <Text style={{fontWeight:'bold', paddingBottom: 5}}>Infants</Text>
                        <Text style={{color:'#8d8d8d'}}>Under 2</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                        <Pressable 
                            onPress={() => setInfants(Math.max(0, infants - 1))}
                            style={styles.button}
                        >
                        <Text style={{color: 'lightgrey', fontSize: 20}}>-</Text>
                        </Pressable>
                        <Text style={{marginHorizontal: 15, fontSize: 16}}>{infants}</Text>
                        <Pressable 
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                        <Text style={{color: 'lightgrey', fontSize: 20}}>+</Text>
                        </Pressable>
                    </View>
                </View>
                            
            </View>

            <View>
                <Pressable  onPress={() => 
                                navigation.navigate('Home', {
                                    screen: 'Explore',
                                    params: {
                                        screen: 'SearchResult',
                                        params: {
                                            guests: adults + children,
                                        }
                                    },
                                })
                            }       
                            style={{
                                    marginBottom: 20, 
                                    backgroundColor: '#f15454', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    height: 50,
                                    marginHorizontal: 20,
                                    borderRadius: 10,     
                                }}>
                    <Text style={{fontWeight:'bold', fontSize: 20, color: 'white'}}>
                        Search
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default GuestsScreen;
