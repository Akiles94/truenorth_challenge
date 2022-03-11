import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
    value: string
    setValue: (text:string)=> void
    placeholder?: string
    password?: boolean
}

const Input = ({
    value,
    placeholder,
    setValue,
    password,
    ...props
}:Props)=>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={(text)=>setValue(text)}
                secureTextEntry={password?password:false}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container:{
        borderColor: "#D1D5DB",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        width: "80%",
        marginBottom:"5%",
        paddingVertical:"1%",
        paddingLeft:"3%"
    }
})