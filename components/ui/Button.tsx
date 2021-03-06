import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../config/theme';

type Props ={
    label: string,
    action: ()=> void,
    testID?: string
}

const Button = ({label, action, testID}:Props)=>{
    return(
        <TouchableOpacity 
            style={styles.btnContainer}
            onPress={action}
            testID={testID}
        >
            <Text style={styles.txtLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor: Colors.primary,
        width: "80%",
        paddingVertical:"2%",
        borderRadius:5
    },
    txtLabel:{
        textAlign:"center",
        color:"white",
        fontSize: 16
    }
})