import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Bottom from './src/BootmTab/Bottom';
import Navigation from './src/BootmTab/stackScreen';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
};
