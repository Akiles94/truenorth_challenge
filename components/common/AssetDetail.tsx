import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Asset } from '../../api/models/assets';
import { Colors } from '../../config/theme';
import { getFormattedMoney } from '../../utils/formatters';

type Props = {
    asset:Asset   
}

const AssetDetail = ({asset}:Props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.leftColumn}>
                    <Text>Supply</Text>
                </View>
                <Text>{getFormattedMoney(asset.supply)}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.leftColumn}>
                    <Text>Max Supply</Text>
                </View>
                <Text>{getFormattedMoney(asset.maxSupply)}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.leftColumn}>  
                    <Text>Market Cap</Text>
                </View>
                <Text>$ {getFormattedMoney(asset.marketCap)}</Text>
                <Text style={{color:Colors.currency}}> USD</Text>
            </View>
        </View>
    )
}

export default AssetDetail;

const styles = StyleSheet.create({
    container:{
        marginVertical:"2%",
        marginLeft:"5%"
    },
    row:{
        flexDirection:"row",
        marginBottom:"2%"
    },
    leftColumn:{
        marginRight:"2%" 
    }
});