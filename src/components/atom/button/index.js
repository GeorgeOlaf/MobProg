import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 11,
    backgroundColor: 'orange',
    paddingVertical: 18,
    borderRadius: 10,
    marginHorizontal: 25,
  },

  labelButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
  },
});

export default Button;