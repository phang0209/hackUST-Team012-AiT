import { createStackNavigator } from 'react-navigation-stack';
import ItineraryList from '../screen/itineraryList';
import Header from '../component/header';
import ReservationForm from '../screen/reservationForm';
import React from 'react';

const screens = {
    ItineraryList: {
        screen: ItineraryList,
        navigationOptions: ({navigation})=>{
            return {
                headerTitle: () => <Header navigation={navigation} title="Itinerary"/>,
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



const ItineraryStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#fff',
            height: 120,
        }
    }
});

export default ItineraryStack;