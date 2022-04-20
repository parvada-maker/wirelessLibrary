import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Transaction from '../screens/transaction';
import Search from '../screens/search';

const Tab= createBottomTabNavigator();


export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name ="Transaction" component={Transaction}/>
                    <Tab.Screen name= "Search" component={Search}/>
                </Tab.Navigator>
            </NavigationContainer>

        );
    }
}