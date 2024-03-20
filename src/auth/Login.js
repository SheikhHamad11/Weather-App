// LoginScreen.js
import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    // Implement your authentication logic here
    // const {email,password}=state
    console.log('email:', email);
    console.log('Password:', password);
    dispatch({type: 'LOGIN'});
    // You can add authentication logic and navigate to the next screen if successful
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="white"
        borderColor="white"
        value={email}
        onChangeText={text => setemail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        borderColor="white"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" color={'green'} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 40,
    marginBottom: 16,
    color: 'white',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
