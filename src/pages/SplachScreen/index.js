import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'

const SplachScreen = () => {
    
    return (
        <View style={styles.page}>
            <Logo />
            <Text style={styles.Text}>Money Tracker</Text>
        </View>
    );
};

export default SplachScreen;
    const styles = StyleSheet.create({
        page:{
            flex: 1,
            backgroundColor: '#02cf8e',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text:{
            fontSize: 32,
            fontFamily: 'Poppins-Medium',
        
        },
    });
