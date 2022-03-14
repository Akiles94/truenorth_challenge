import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AssetHeader } from '../components/common';
import DataContext from '../components/contexts/DataContext';
import Loader from './Loader';
import AssetsStyles from '../styles/assets';

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets
 * API Example: https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen() {  
  
  const {assets,loading} = useContext(DataContext); 
  const navigator = useNavigation();

  const handleTouchItem = (id:string, index: Number)=>{
    navigator.navigate("Detail",{id, index});
  }

  return loading?(
    <Loader/>
  ):(
    <View style={styles.container}>
      {assets && assets.length > 0 &&(
        <ScrollView testID='assets-container'>
          {assets.map((item, index) => (
            <TouchableOpacity style={AssetsStyles.container} key={item.id} onPress={()=>handleTouchItem(item.id, index+1)}>
              <AssetHeader asset={item} index={index+1}/>
            </TouchableOpacity>
          ))}          
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin:8
  }
});