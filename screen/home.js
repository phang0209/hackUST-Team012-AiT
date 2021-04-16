import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SearchBar from '../component/searchBar'

const Home = () => {

  const f = (string) =>{
    console.log(string);
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={{flex:1, flexDirection: 'column'}}>
        <TouchableOpacity onPress={()=>f("Recent Itinerary")}>
          <View style={styles.horiRetaBanner}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Recent Itinerary</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1}} onPress={()=>f("Advertisement")}>
            <View style={styles.vertRetaBanner}>
              <View style={{flexDirection: 'column-reverse'}}>
                <Image source={require('../assets/tokyo-4358758_1280.jpg')} style={{height: 250, width: 166, borderRadius: 10}}/>
                <Text style={{position: 'absolute', color: "yellow", fontWeight: 'bold', fontSize: 25, margin: 10, alignSelf: 'flex-end'}}>Tokyo   </Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <View style={{height: 250, flex: 1, margin: 10, borderRadius: 10}}>
            <TouchableOpacity onPress={()=>f("Food")}>
              <View style={{height: 120, backgroundColor: '#d9d9d9', borderRadius: 10, marginBottom: 10}}>
                <View style={{flexDirection: 'column-reverse'}}>
                  <Image source={require('../assets/foodd.jpg')} style={{height: 120, width: 185, borderRadius: 10}}/>
                  <Text style={{position: 'absolute', color: "yellow", fontWeight: 'bold', fontSize: 25, margin: 10, alignSelf: 'flex-end'}}>Food   </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>f("Transportation")}>
              <View style={{height: 120, backgroundColor: '#d9d9d9', borderRadius: 10}}>
                <View style={{height: 120, backgroundColor: '#d9d9d9', borderRadius: 10, marginBottom: 10}}>
                  <View style={{flexDirection: 'column-reverse'}}>
                    <Image source={require('../assets/8657120528_e88bbb1cc5_b.jpg')} style={{height: 120, width: 185, borderRadius: 10}}/>
                    <Text style={{position: 'absolute', color: "yellow", fontWeight: 'bold', fontSize: 22, margin: 10, alignSelf: 'flex-end'}}>Transportation   </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{justifyContent: 'flex-end'}}onPress={()=>f("Advertisement")}>
          <View style={{height: 100, backgroundColor: '#c7c7c7', marginTop: 20, marginHorizontal: 30, justifyContent: 'center', alignContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              (Advertisement/Google Ad)
            </Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: '#FCBA03',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-end'
  },
  vertRetaBanner:{
    height: 250,
    backgroundColor: '#d9d9d9',
    flex: 1,
    margin: 10,
    borderRadius: 10
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
