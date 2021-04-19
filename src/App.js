import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Mendaftar from './components/pages/Mendaftar';

const App = () => {
  return (
    <View>
      <Text style={styles.Title}>Mendaftar</Text>
      <Mendaftar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 18,
  },
});