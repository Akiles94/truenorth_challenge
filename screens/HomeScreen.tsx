import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useNavigation } from '@react-navigation/native';
import DataContext from '../components/contexts/DataContext';

/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {

  const { 
    username, 
    setUsername, 
    password,
    setPassword 
  } = useContext(DataContext);

  const [name, setName] = useState(username);
  const [pass, setPass] = useState(password);
  
  const navigator = useNavigation();

  const handleSignIn = ()=>{
    if(name == "" || pass == ""){
      Alert.alert("Please fill the fields before continuing");
      return
    }
    setUsername(name);    
    setPassword(pass);
    navigator.navigate("List");    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text></Text>
      <Input
        value={name}
        placeholder="Enter your name"
        setValue={setName}
        testID="input-username"
      />
      <Input
        value={pass}
        placeholder="Enter your password"
        setValue={setPass}  
        password
        testID="input-password"
      />
      <Button label="Sign In" action={handleSignIn} testID="button-next"/>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
