import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Asset } from '../../api/models/assets';
import AssetsStyles, {movementColors} from '../../styles/assets';
import { getFormattedMoney, getFormattedPercentage } from '../../utils/formatters';

type Props = {
    asset: Asset  
    index: Number 
}

const AssetHeader = ({asset, index}:Props)=>{
    return(
        <>
            <View style={AssetsStyles.headerContainer}>
                <View style={AssetsStyles.leftText}>
                    <View style={AssetsStyles.titleContainer}>
                        <Text style={{...AssetsStyles.itemTitle, fontWeight:"bold"}}>{asset.title} </Text>
                        <Text style={AssetsStyles.itemTitle}>- {asset.subtitle}</Text>
                    </View>                    
                </View>
                <View style={AssetsStyles.rightText}>
                    <Text style={AssetsStyles.txtIndex}>#{index}</Text>
                </View>
            </View>
            <View style={AssetsStyles.headerContainer}>
                <View style={AssetsStyles.leftText}>
                    <View style={AssetsStyles.titleContainer}>
                        <Text style={AssetsStyles.txtValue}>$ {getFormattedMoney(asset.value)}</Text>
                        <Text style={AssetsStyles.txtCurrency}> USD</Text>
                    </View>
                </View>
                <View style={AssetsStyles.rightText}>
                    <View style={[AssetsStyles.movementContainer,movementColors[asset.movement?"backGreen":"backRed"]]}>
                        <View style={AssetsStyles.titleContainer}>
                            {asset.movement?(
                                <Image source={require("../icons/greenArrow.png")}/>
                            ):(
                                <Image source={require("../icons/redArrow.png")}/>
                            )}                            
                            <Text style={[movementColors[asset.movement?"txtGreen":"txtRed"]]}> {getFormattedPercentage(asset.percentage)}%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default AssetHeader;