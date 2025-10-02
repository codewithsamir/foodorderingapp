import { images } from '@/constants';
import { useAuthStore } from '@/store/auth.store';
import { TabBarIconProps } from '@/type';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabBarIcon  = ({focused , icon , title}:TabBarIconProps) =>(
  <View className='tab-icon' >
    <Image source={icon} className={`size-7`} tintColor={focused ? "#fe8c00" : "#5d5f6d" } resizeMode="contain" />
    <Text className={`text-sm ${focused ? 'text-primary' : 'text-gray-400'}`}>{title}</Text>
  </View>
)
  




const TabLayout = () => {
    const { isAuthenticated } = useAuthStore();
    if(!isAuthenticated) return <Redirect href="/sign-in"  />
  return (
    <Tabs 
    screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{
       borderTopLeftRadius:50, 
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        height:70,
    marginHorizontal:20,
    position:'absolute',
    bottom:10,
    backgroundColor:'#fff',
    shadowColor:'#1a1a1a',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:4,
    elevation:5,
      }

    }}
    > 
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon:({focused})=>(<TabBarIcon focused={focused} title="Home" icon={images.home} />) }} />

      <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon:({focused})=>(<TabBarIcon focused={focused} title="Search" icon={images.search} />) }} />

      <Tabs.Screen name="cart" options={{ title: 'Cart', tabBarIcon:({focused})=>(<TabBarIcon focused={focused} title="Cart" icon={images.bag} />) }} />

      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon:({focused})=>(<TabBarIcon focused={focused} title="Profile" icon={images.person} />) }} />



      </Tabs>
  );
}

export default TabLayout