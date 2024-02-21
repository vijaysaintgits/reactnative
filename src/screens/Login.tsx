// app function to login;
import React from 'react';
import ButtonComponent from '../component/ButtonComponent';

import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});

const Login = () => {
  return ( 
    <View style={stylesButton.container}>
      <SafeAreaView>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="numeric"
        />
        <ButtonComponent />
      </SafeAreaView>
    </View>
  );
};

const stylesButton = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Login;
