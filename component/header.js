import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({navigation, title}) => {

const openMenu = () => {
    navigation.openDrawer();
};

    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={30} onPress={openMenu} style={styles.menu}/>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000'
    },
    menu: {
        position: 'absolute',
        left: 5,
    }
});

export default Header;