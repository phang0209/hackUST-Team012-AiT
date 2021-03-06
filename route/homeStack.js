import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from '../screen/searchPage';
import ReservationForm from '../screen/reservationForm';
import Header from '../component/header';
import React from 'react';

const screens = {
    SearchPage: {
        screen: SearchPage,
        navigationOptions: ({navigation})=>{
            return {
                headerTitle: () => <Header navigation={navigation} title="Search"/>,
            }
        }
    },
    ReservationForm: {
        screen: ReservationForm,
        navigationOptions: {
            title: 'Reservation'
        }
    }
};



const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#fff',
            height: 120,
        }
    }
});

export default HomeStack;