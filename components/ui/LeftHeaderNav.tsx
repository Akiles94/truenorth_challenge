import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../config/theme';

type Props = {
    label: string
}

const LeftHeaderNav = ({label}:Props)=>{
    const navigator = useNavigation();
    return label?(
        <TouchableOpacity style={styles.container} onPress={()=>{navigator.goBack()}}>
            <Image source={require("../icons/hi-chevron_left.png")}/>
            <Text style={styles.txtLabel}>{label}</Text>
        </TouchableOpacity>
    ):(<></>)
}

export default LeftHeaderNav;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"        
    },
    txtLabel:{
        color: Colors.primary
    }
})