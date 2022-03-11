import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AssetDetail, AssetHeader, Button } from '../components/common';
import DataContext from '../components/contexts/DataContext';
import Loader from './Loader';
import AssetsStyle from '../styles/assets';
import { useNavigation } from '@react-navigation/native';
import { getFormattedPercentage } from '../utils/formatters';

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */


export default function ListScreen({route}:any) {
  /* ToDo: Get the id param from the route */
  //const id = 'bitcoin';
  const { index } = route.params;
  const { loading, detailedAsset } = useContext(DataContext);
  const navigator = useNavigation();

  return loading?(
    <Loader/>
  ):(
    <View style={styles.container}>
      {detailedAsset && !loading ? (
        <View style={AssetsStyle.containerDetail}>
          <AssetHeader asset={detailedAsset} index={index}/> 
          <AssetDetail asset={detailedAsset}/>                   
        </View>        
      ) : (
        <Text>Loading</Text>
      )}
      <View style={styles.btn}>
        <Button label="My Wallet" action={()=> navigator.navigate("Wallet")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  btn:{
    marginTop:"8%",
    width: "100%",
    alignItems:"center"
  }
});
