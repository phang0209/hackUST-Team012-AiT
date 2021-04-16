import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ItItem from '../component/itineraryItem';

const ItineraryList = () => {

    const [itiEntry, setitiEntry] = useState([
        { dest: "Ko Ming", time: "12:00", date: "1/1/2021", reserve: true },
        { dest: "ABC", time: "12:00", date: "1/1/2021", reserve: true },
        { dest: "DEF", time: "12:00", date: "1/1/2021", reserve: true }
    ]);

    return(
        <View style={styles.container}>
            {/* <Header title="Itinerary1" HeaderTextStyle={styles.HeaderTextStyle} subtext="Hong Kong"/> */}
            <FlatList 
                data={itiEntry}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => {console.log("hi")}}>
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
});

export default ItineraryList;