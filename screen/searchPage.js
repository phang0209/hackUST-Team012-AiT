import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, FlatList, TouchableOpacity, Modal, Image} from 'react-native';
import SearchBar from '../component/searchBar';
import ShopItem from '../component/shopItem';
import { MaterialIcons } from '@expo/vector-icons';
import { ceil } from 'react-native-reanimated';


const SearchPage = ({ navigation }) => {
    const [shopEntries, setshopEntries] = useState([
        { index: 0, name: "Ko Ming", address: "10-14, ABC Road, To Kwa Wan, Kowloon, HK", tel: "12345678" },
        { index: 1, name: "ABC", address: "10-14, ABC Road, To Kwa Wan, Kowloon, HK", tel: "12345678" },
        { index: 2, name: "DEF", address: "10-14, ABC Road, To Kwa Wan, Kowloon, HK", tel: "12345678" },
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
            {/* <Header title="Search" HeaderTextStyle={styles.HeaderTextStyle}/> */}
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.container}>
                    <MaterialIcons name="close" size={25} onPress={() => setModalOpen(false)} style={{alignSelf: 'flex-end'}}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', margin: 20, marginTop:0}}>
                            <Text style={{fontSize:30, margin: 5}}>{currentItem.name}</Text>
                            <Image style={{height: 150, width: 200, resizeMode: 'stretch'}}source={require('../assets/Tokwawan.jpg')}></Image>
                        </View>

                        <TouchableOpacity onPress={book}>
                            <View style={{color: 'yellow', alignSelf: 'center', backgroundColor: 'yellow', height: 120, width: 120, borderRadius: 5, marginTop: 50}}>
                                <MaterialIcons name="call" size={50} style={{alignSelf: 'center', margin: 15}}/>
                                <Text style={{textAlignVertical: 'center', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Book Now!</Text>
                            </View>
                        </TouchableOpacity>

                        
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.details}>{"Address: "}{currentItem.address}</Text>
                        <Text style={styles.details}>{"Tel: "}{currentItem.tel}</Text>
                        <Text style={styles.details, {margin: 20, marginVertical: 10, marginBottom: 50}}>{"Opening Hours: \nToday\t11:00-23:00\nMon-Tue\t11:00-23:00\nWed\tclose\nThu-Sun\t11:00-23:00"}</Text>
                        <TouchableOpacity onPress={() => setModalOpen(false)}>
                            <View style={{backgroundColor: "white", height: 50, width: 350, alignSelf: 'center', borderRadius: 20,}}>
                                <Text style={{fontSize: 20, textAlign: 'center', margin: 10, color: '#000'}}>Add to Itinerary</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{height: 120, width: 170, resizeMode: 'stretch', margin: 20, marginHorizontal: 12}}source={require('../assets/food-lip-delicious-food-preview.jpg')}></Image>
                            <Image style={{height: 120, width: 170, resizeMode: 'stretch', margin: 20, marginHorizontal: 12}}source={require('../assets/food-lip-delicious-food-preview.jpg')}></Image>
                        </View>
                    </View>
                </View>
            </Modal>

            <SearchBar />
            <FlatList 
                data={shopEntries}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <ShopItem shop={item} />
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

export default SearchPage;