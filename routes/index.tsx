import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LeftHeaderNav } from '../components/common';
import IconHeaderTitle from '../components/ui/IconHeaderTitle';
import WalletTabs from './wallet';
import { 
    HomeScreen,
    DetailScreen,
    Loader,
    ListScreen,
    ToDoScreen,
    ErrorScreen
} from '../screens';

const Stack = createStackNavigator();

const Router = ()=>{
    return(
        <Stack.Navigator
          screenOptions={({route})=>({
            headerTitle:route.name, 
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize: 18,
                fontWeight:"600"
              },
              headerLeft: route => (<LeftHeaderNav label={route.label?route.label:""}/>)    
          })}
        >                             
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerTitle: props => (<IconHeaderTitle {...props}/>),
            }}
          />                    
          <Stack.Screen 
            name="Error" 
            component={ErrorScreen} 
            options={{
              headerLeft:()=>(<></>)
            }}
          />
          <Stack.Screen name="ToDo" component={ToDoScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Loader" component={Loader} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Wallet" component={WalletTabs} />                  
        </Stack.Navigator>
    )
}

export default Router;