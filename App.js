
import { View,Text } from 'react-native';
import React from 'react';
import Popup from './components/Popup';
export default function App() {

  return (
    <View style={{marginTop: 100}}>
  <Text style={{textAlign:"center",fontWeight:600}}>I run on my phone .</Text>
      <Popup />
    </View>
  );
}


