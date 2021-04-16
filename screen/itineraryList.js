import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image, Modal, TouchableOpacity} from 'react-native';
import ItItem from '../component/itineraryItem';
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';

const ItineraryList = ({navigation}) => {

    const [itiEntry, setitiEntry] = useState([
        { name: "Ko Ming", time: "12:00", date: "1/1/2021", reserve: false },
        { name: "ABC", time: "12:00", date: "1/1/2021", reserve: false },
        { name: "DEF", time: "12:00", date: "1/1/2021", reserve: false }
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    
    const pressHandler = (item) => {
        setCurrentItem(item);
        setModalOpen(true);
    };

    const book = () => {
        setModalOpen(false);
        navigation.navigate('ReservationForm', currentItem);
    }   

    return(
        <View style={styles.container}>
            
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.container}>
                    
                    <MaterialIcons name="close" size={25} onPress={() => setModalOpen(false)} style={{alignSelf: 'flex-end'}}/>
                    <Text style={{fontSize:30, margin: 5, fontWeight: 'bold'}}>{"Itinerary Entry"}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', margin: 20, marginTop:0}}>
                            <Text style={{fontSize:30, margin: 5}}>{currentItem.name}</Text>
                            <Image style={{height: 150, width: 200, resizeMode: 'stretch'}}source={require('../assets/Tokwawan.jpg')}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.details}>{"Time: "}{currentItem.time}</Text>
                        <Text style={styles.details}>{"Date: "}{currentItem.date}</Text>
                        <Text style={styles.details}>{"Reservation:" }{(currentItem.reserve)?<FontAwesome name="check" size={15}/>:<FontAwesome name="remove" size={15}/>}</Text>
                        <TouchableOpacity onPress={book}>
                            <View style={{backgroundColor: "white", height: 50, width: 350, alignSelf: 'center', borderRadius: 20,marginVertical: 20}}>
                                <Text style={{fontSize: 20, textAlign: 'center', margin: 10, color: '#000'}}>Book</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{height: 120, width: 170, resizeMode: 'stretch', margin: 20, marginHorizontal: 12}}source={require('../assets/food-lip-delicious-food-preview.jpg')}></Image>
                            <Image style={{height: 120, width: 170, resizeMode: 'stretch', margin: 20, marginHorizontal: 12}}source={require('../assets/food-lip-delicious-food-preview.jpg')}></Image>
                        </View> 
                    </View>
                </View>
            </Modal>

            <FlatList 
                data={itiEntry}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>pressHandler(item)}>
                        <ItItem iti={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
    },
    HeaderTextStyle: {
        color: '#000',
            fontSize: 25,
            textAlign: 'left',
            flex: 2,
      },
    details: {
        fontSize: 15,
        margin: 20,
        marginVertical: 10,
    }
});

export default ItineraryList;