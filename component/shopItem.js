import React from 'react';
import {View, Text,Button, StyleSheet, Image, TouchableOpacity} from 'react-native';


const ShopItem = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.hContainer}>
                <Image style={styles.thumbnail} source={require('../assets/Tokwawan.jpg')}></Image>
                <Text h1 style={styles.locationTitle}>{props.shop.name}</Text>
            </View>
            <View style={styles.hContainer}>
                <Text style={styles.details, {flex: 2, textAlign: 'left', margin: 10,}}>Address: {props.shop.address}</Text>
                <Text style={styles.details, {flex: 1, textAlign: 'right', margin: 10}}>Tel: {props.shop.tel}</Text>
            </View>
            <Text style={styles.text}>View Details</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        marginHorizontal: 20,
        marginVertical: 15,
        height: 200,
        borderRadius: 15,
        flexDirection: 'column', 
    },
    hContainer: {
        flexDirection: 'row',
        marginBottom: 0,
    },
    thumbnail:{
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        margin: 5,
        marginHorizontal:10,
    },
    locationTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 20,
        textAlignVertical: 'center',
    },
    details: {
        marginHorizontal: 20,
        marginVertical: 0,
        fontSize: 15,
        color: '#000'
    },
    text: {
        textAlign: 'center',
        margin: 3,
        color: 'grey'
    }
});

export default ShopItem;