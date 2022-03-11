import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../config/theme';


const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps<BottomTabBarOptions>)=>{
    
    return(
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
                };

                const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
                };

                return (
                    <View style={styles.tabContainer} key={index}>
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[styles.textContainer,{
                                borderTopColor: isFocused?Colors.primary:"white",
                                borderTopWidth: 2.5,
                            }]}                            
                        >
                            <Text style={[styles.textTab ,{ color: isFocused ? Colors.primary : "black" }]}>
                            {label}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    )
}

export default TabBar;

export const tabColors={
    active:{
        color: Colors.primary
    },
    inactive:{
        color: "black"
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flexDirection:"row",
        height: 50
    },
    tabContainer:{
        flexDirection:"column",
        width: "50%",
        alignItems:"center",        
    },
    textTab:{
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    textContainer:{        
        paddingTop:"2%",
        width: 120
    }
})