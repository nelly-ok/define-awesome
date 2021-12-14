import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';

import { RootTabScreenProps } from '../types';

// interface Props {
//   navigation: any
// }

const HomeScreen  =  ({ navigation }: RootTabScreenProps<'Home'>) => {

  const playSolo = () => {
    navigation.navigate('SoloPlay')
  }

  return (
    <View style={styles.container}>
      <Button icon="camera" mode="contained" onPress={playSolo}>
        Solo
      </Button>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Group
      </Button>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Online
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen;
