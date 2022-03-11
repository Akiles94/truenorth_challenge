import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../config/theme';

const Loader = ()=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <ActivityIndicator color={Colors.primary} size={'large'}/>
            </View>            
        </ScrollView>
    )
}

export default Loader;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        width: "100%",
        height: 500,
        justifyContent:"center"
    },
    logo:{
        width: "30%",
        height: 100,
        marginBottom:"5%"
    }
});