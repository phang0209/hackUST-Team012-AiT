import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nagivator from './route/homeStack';
import ItineraryList from './screen/itineraryList';
import SearchPage from './screen/searchPage'


const App = () => {
  return (
    <Nagivator />
    // <ItineraryList />
    // <ReservationForm />
    // <SearchPage />
    // <ShopDetail />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;