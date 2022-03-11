import React from 'react';
import { Image} from 'react-native';
import { StackHeaderTitleProps } from '@react-navigation/stack';

const IconHeaderTitle = (props : StackHeaderTitleProps)=>{
    return(
    <Image source={require("../icons/TrueNorthIcon.png")}/>
)}

export default IconHeaderTitle;