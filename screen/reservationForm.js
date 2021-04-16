import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ReservationForm = () => {
    return(
        <View style={styles.container}>
            <Text h1 style={styles.name}>Ko Ming</Text>
            <TextInput style={styles.smallInputBox}
                placeholder="Name:"
            />
            <TextInput style={styles.smallInputBox}
                placeholder="Tel:"
            />
            <TextInput style={styles.smallInputBox}
                placeholder="Date:"
            />
            <TextInput style={styles.smallInputBox}
                placeholder="Time:"
            />
            <TextInput style={styles.smallInputBox}
                placeholder="Number of People:"
            />
            <TextInput style={styles.largeInputBox}
                placeholder="Remark:"
            />
            <View style={styles.butn}>
                <Button title="Submit" color="yellow"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 20,
        marginBottom: 10,
        marginHorizontal: 35,
    },
    smallInputBox: {
        marginHorizontal: 30,
        marginVertical: 8,
        height: 30,
        borderRadius: 12,
        backgroundColor: '#fff',
        padding: 0,
        paddingHorizontal: 5,
    },
    largeInputBox: {
        marginHorizontal: 30,
        marginVertical: 8,
        height: 200,
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    butn: {
        marginVertical: 25,
        marginHorizontal: 30,
    },
});

export default ReservationForm;