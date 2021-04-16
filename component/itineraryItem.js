import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


const ItItem = (props) => {
    return(
        <View style={styles.container}>
            <View>
                <Text h1 style={styles.locationTitle}>{props.iti.dest}</Text>
                <Text style={styles.details}>Time: {props.iti.time}</Text>
                <Text style={styles.details}>Date: {props.iti.date}</Text>
                <Text style={styles.details}>Reservation: {(props.iti.reserve)?<FontAwesome name="check" size={15}/>:<FontAwesome name="remove" size={15}/>}</Text>
                <Text style={{textAlign: 'center', color: 'grey', marginTop: 20}}>View Details</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        marginHorizontal: 20,
        marginVertical: 15,
        height: 175,
        borderRadius: 15,
        flexDirection: 'column', 
    },
    locationTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 20,
    },
    details: {
        marginHorizontal: 20,
        marginVertical: 0,
        fontSize: 15,
        color: '#000'
    },
    butn: {
        justifyContent: 'space-between',
    }
});

export default ItItem;