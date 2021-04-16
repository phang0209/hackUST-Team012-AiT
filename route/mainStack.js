import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screen/home'
import Header from '../component/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=>{
            return {
                headerTitle: () => <Header navigation={navigation} title="Rescation"/>,
            }
        }
    },
};



const MainStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#fff',
            height: 120,
        }
    }
});

export default MainStack;