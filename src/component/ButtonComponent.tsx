import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const ButtonComponent = () => {
  const [count, setCount] = useState<number>(0);

  const onPress = () => {
    setCount((prevCount: number) => prevCount + 1);
    console.log('we are here' + count);
  };
  return (
    <TouchableOpacity style={stylesButton.button} onPress={onPress}>
      <Text>Login{count}</Text>
    </TouchableOpacity>
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
export default ButtonComponent;
