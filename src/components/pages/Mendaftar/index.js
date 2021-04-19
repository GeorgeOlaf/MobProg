import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import Axios from 'axios';

const Mendaftar = () => {
  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://10.0.2.2:3004/users').then(res => setUsers(res.data));
  }, [users]);

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    Axios.post('http://10.0.2.2:3004/users', data);
  };

  return (
    <View>
      <View>
        <TextInput
          value={firstName}
          label="nama depan"
          placeholder="Masukan nama depan"
          onChangeText={e => setFirstName(e)}
        />
        <TextInput
          value={lastName}
          label="nama belakang"
          placeholder="Masukkan nama belakang"
          onChangeText={e => setLastName(e)}
        />
        <TextInput
          value={email}
          label="Email"
          placeholder="Masukan Email Name Anda"
          onChangeText={e => setEmail(e)}
        />
        <Button label="kirimkan" onSubmit={handleSubmit} />
      </View>
    </View>
  );
};

export default Mendaftar;

