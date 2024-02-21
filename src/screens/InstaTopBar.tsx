import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    paddingRight:20,
  },
  text: {
    fontSize: 30,
    
    // paddingRight: 30,
    // paddingLeft: 40,
    alignContent:'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 100,
    marginTop: 10,
  },
});
const InstaTopBar = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require('../assets/camera.png')} // Provide the path to your image file
        style={styles.image}
      />
      <Text style={styles.text}>Instagram</Text>
      <Image
        source={require('../assets/paper-plane.png')} // Provide the path to your image file
        style={styles.image}
      />
    </View>
  );

};

export default InstaTopBar;
