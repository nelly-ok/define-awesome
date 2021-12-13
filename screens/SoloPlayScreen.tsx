import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, FC } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View} from 'react-native';

interface Props {
  navigation: any
}

const SoloPlayScreen : FC<Props> = ({navigation}) => {

  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState([]);

  /* Numbers must be greater than 1*/

  useEffect(() => {
    let newPlayers = Array(parseInt(count));
    if (count !== 0) { 
      let stop;
      count < players.length ? stop = count : stop = players.length
      for (let i = 0; i < stop; i++) {
        newPlayers[i] = players[i]
      }
    };
    console.log(newPlayers)
    setPlayers(newPlayers)
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>
        Players
      </Text>

      
      <TextInput onChangeText={text => setCount(text)}>

      </TextInput>

      <View>
        {players.map(() => {return <View>
        <Text>
          yerr
        </Text>
        <TextInput>

        </TextInput>
      </View>})}
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
