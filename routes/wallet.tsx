import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, PartnersScreen } from '../screens';
import { TabBar } from '../components/ui';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props)=> <TabBar {...props} />}>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Partners" component={PartnersScreen} />
    </Tab.Navigator>
  );
}