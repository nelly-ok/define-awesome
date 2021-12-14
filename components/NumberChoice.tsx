import { StatusBar } from 'expo-status-bar';
import React, { useState, FC } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';

import { RootTabScreenProps } from '../types';

interface Props {
  navigation: any,
  setCount: any,
  count: number
}

const NumberChoice : FC<Props> =  ({ navigation, count, setCount }) => {

  // const [count, setCount] = useState(0);
  const changeCount = (direction: string) => {
    let newCount;
    if (direction == "down") {
      if (count == 0) return;
      newCount = count-1
    }
    else{
      if (count == 10) return;
      newCount = count+1
    }
    setCount(newCount);
  }

  return (
    <View style={styles.container}>
      <Button style={styles.button} icon="minus" mode="contained" onPress={() => changeCount("down")}>
      </Button>
      <Text >
        {count}
      </Text>
      <Button style={styles.button} icon="plus" mode="contained" onPress={() => changeCount("up")}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  }
});


export default NumberChoice;
