import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '../components/common';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/home-illustration.png')} />
      <Text style={styles.title}>Howdy partner!</Text>
      <View style={styles.paragraph}> 
        <Text style={styles.text}>This is your assignment.</Text>
        <Text style={styles.text}>Follow the instructions on the Readme file.</Text>
      </View>    
      <View style={styles.paragraph}>
        <Text style={styles.text}>Don’t worry, it’s easy! You should have the app looking smooth in no time.</Text>
      </View>        
      <Button 
        label="Get Started" 
        action={() => navigator.navigate("Home")}         
      />
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
  illustration: {
    width: 256,
    height: 256,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  paragraph:{
    paddingBottom:"4%"
  },
  text:{
    textAlign:"center",
    fontSize: 14
  }
});
