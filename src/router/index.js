import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SplachScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="SplachScreen" component={SplachScreen } options={{headerShown:false}}/>
        <Stack.Screen name="SignIn" component={SignIn}/>

      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
