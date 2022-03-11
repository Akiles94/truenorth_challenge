import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image,BackHandler } from 'react-native';
import { Button } from '../components/common';
import { useNavigation } from '@react-navigation/native';

export default function ErrorScreen(){

    const navigator = useNavigation();

    useEffect(() =>{
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {                    
            navigator.navigate("Home");
            return true;
         }
        );
        return ()=> backHandler.remove();
    },[]);

  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/home-illustration.png')} />
      <Text style={styles.title}>ERROR!</Text>
      <View style={styles.paragraph}> 
        <Text style={styles.text}>Sorry, we are having technicals problems.</Text>
        <Text style={styles.text}>Please try again later.</Text>
      </View>          
      <Button 
        label="Go Home" 
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
