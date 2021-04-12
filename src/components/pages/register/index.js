import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Register = () => {
    return (
        <View>
            <Text style={styles.title}>Registration</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '700',
        fontFamily: 'Roboto',
    },
})

export default Register