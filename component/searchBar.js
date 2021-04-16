import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = (props) => {
    return(
        <View>
            <TextInput style={styles.input}>Search</TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginHorizontal: 10,
        marginTop: 15,
        marginBottom: 25,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 3,
    },
})

export default SearchBar;