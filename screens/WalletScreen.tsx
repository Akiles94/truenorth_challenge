import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking } from 'react-native';
import DataContext from '../components/contexts/DataContext';
import { Colors } from '../config/theme';

/**
 * ToDo: Create a Bottom Tab Navigation for: Account and Partners sections
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

export default function WalletScreen() {
  return (
    <View>
      <AccountSection />
      <PartnersSection />
    </View>
  );
}

export function AccountSection() {
  const { username } = React.useContext(DataContext);
  return (
    <View style={[styles.container, {backgroundColor:"white"}]}>
      <Image style={styles.illustration} source={require('../assets/finish-illustration.png')} />
      <Text style={styles.title}>Hello, {username?username:"$contextName"}</Text>
      <Text>Glad you are here,</Text>
      <Text>hope to see you soon.</Text>
    </View>
  );
}

type Partner = {
  name: string
  url: string
  comments: string
}

type ListItemProps = {
  item: Partner,
  index: number
}

const loadInBrowser = (url:string) => {
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

export function PartnersSection() {
  const partnerList = [
    { 
      name: 'Club Miles App', 
      url: 'https://play.google.com/store/apps/details?id=ec.com.clubmiles&hl=es', 
      comments: 'I was involved in the second stage of development of Club Miles App from Diners Club, for six months aprox.' 
    },
    { 
      name: 'Mas ayudas y ahorras', 
      url: 'https://play.google.com/store/apps/details?id=com.pucese.mas_ayudas_y_ahorras&hl=es', 
      comments: 'I developed the admin app of Mas ayudas y ahorras App from PUCESE universtiy of Ecuador, for eight months aprox.' 
    },
    { 
      name: 'VOY App', 
      url: 'Publish in process', 
      comments: 'I lead the frontend development of VOY App from services stations of VOY in Argentina, for six months aprox.' 
    },
  ];

  const ListItem = ({ item, index }:ListItemProps) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.txtRow}>
          <Text style={styles.itemTitle}>{item.name} #{index+1}</Text>
        </View>        
        <View style={styles.txtRow}>
          <Text>{item.comments}</Text>
        </View>        
        <View style={styles.txtRow}>
          <Text>URL: <Text style={styles.txtUrl}>{item.url}</Text></Text>
        </View>        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text>Some apps I was involved:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {partnerList.map((item, index) => (
            <ListItem key={item.name} item={item} index={index} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%"
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  illustration: {
    width: 256,
    height: 160,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
    borderRadius: 10,
    paddingVertical:"4%",
    paddingHorizontal:"4%"
  },
  txtRow:{
    flexDirection:"row",
    marginBottom:"3%"
  },
  itemTitle:{
    color: Colors.money,
    fontSize: 15,
    fontWeight: "bold"
  },
  txtUrl:{
    color: Colors.primary
  }
});
