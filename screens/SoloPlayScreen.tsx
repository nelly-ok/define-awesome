import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, FC } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View} from 'react-native';

import { RootStackScreenProps } from '../types';
import { createIconSetFromFontello } from '@expo/vector-icons';

import NumberChoice from '../components/NumberChoice';

const SoloPlayScreen  = ({navigation} : RootStackScreenProps<'SoloPlay'>) => {

  const [count, setCount] = useState(1);
  const [players, setPlayers] = useState<string[]>([""]);

  useEffect(() => {
    let newPlayers = Array(count);
    for (let i = 0; i < count; i++){
      newPlayers[i] = players[i]
    }
    setPlayers(newPlayers);
  }, [count])

  const setPlayerName = (index: number, name: string) => {
    let newPlayers = [...players]
    newPlayers[index] = name;
    setPlayers(newPlayers)
  }

  /* Numbers must be greater than 1*/

  // useEffect(() => {
  //   let newPlayers = Array(parseInt(count));
  //   if (count !== 0) { 
  //     let stop;
  //     count < players.length ? stop = count : stop = players.length
  //     for (let i = 0; i < stop; i++) {
  //       newPlayers[i] = players[i]
  //     }
  //   };
  //   console.log(newPlayers)
  //   setPlayers(newPlayers)
  // }, [count]);

  return (
    <View style={styles.container}> 

      <NumberChoice count={count} setCount={setCount} navigation={navigation}/>

      <View>
        {players.map((elem, index ) => (
        <View key={index}>
          <Text>
            Player Name
          </Text>
          <TextInput onChangeText={(text) => setPlayerName(index, text)}>

          </TextInput>
        </View>))}
      </View>

    
      <Button mode="contained">
        Start
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
  },
});


export default SoloPlayScreen;
