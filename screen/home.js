import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../component/searchBar'

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Header style={styles.header} title='Rescation' HeaderTextStyle={styles.HeaderTextStyle}/> */}
      <SearchBar />
      <View style={{flex:1}}>
        <View style={styles.horiRetaBanner}>
          <Text>Recent Itinerary</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.vertRetaBanner}>
            <Text>Advertisement</Text>
          </View>
          <View style={{height: 250, flex: 1, margin: 10, borderRadius: 10}}>
            <View style={{height: 120, backgroundColor: 'grey', borderRadius: 10, marginBottom: 10}}>
              <Text>Food</Text>
            </View>
            <View style={{height: 120, backgroundColor: 'grey', borderRadius: 10}}>
              <Text>Transportation</Text>
            </View>
          </View>
        </View>
        <View style={{height: 100, backgroundColor: 'grey', marginTop: 20, marginHorizontal: 30}}>
          <Text>
            Advertisement
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  text: {
    fontSize: 30,
  },
  horiRetaBanner:{
    height: 130,
    backgroundColor: 'grey',
    marginHorizontal: 10,
    borderRadius: 10
  },
  vertRetaBanner:{
    height: 250,
    backgroundColor: 'grey',
    flex: 1,
    margin: 10,
    borderRadius: 1
  },
  block: {
    backgroundColor: "black",
  },
  HeaderTextStyle: {
    color: '#000',
        fontSize: 25,
        textAlign: 'center',
        flex: 2,
  },
});

export default Home;
