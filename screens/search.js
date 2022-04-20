import React from 'react';
import {View, Text,Button, TouchableOpacity} from 'react-native';


export default class Search extends React.Component{
render(){
    return(
        <View style={{ backgroundColor: 'blue', alignItems: 'center', flex : 1, justifyContent: 'center'}}>
        <Text>search for a book</Text>
        </View>
    );
}

}