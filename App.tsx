import React from 'react';
import Login from './src/screens/Login';
import InstaTopBar from './src/screens/InstaTopBar';
import InstagramStories from './src/component/InstagramStories';
import InstagramMainContentArea from './src/component/InstagramMainContentArea';

import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';

// const App = () => {
//   return <Login />;
// };

const App = () => {
  return (
    <>
      <InstaTopBar />
      <InstagramStories />
      <InstagramMainContentArea />
    </>
  );
};


export default App;
