import { Stack, Tabs } from 'expo-router';
import React from 'react'
import { Image, View } from 'react-native';

import homeIcon from '@/assets/images/icons/home.png'
import profileIcon from '@/assets/images/icons/profile.png'
import cartIcon from '@/assets/images/icons/cart.png'

const TabIcon = ({ focused, icon }) => (
    <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-[#EEEEEE]" : ""}`}>
        <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? " bg-violet-500" : ""}`}>
            <Image source={icon} tintColor="white" resizeMode='contain' className='w-7 h-7' />
        </View>
    </View>
);

const Layout = () => {
    return (
        <Tabs
            initialRouteName='index'
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white,",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    paddingBottom: 0,
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 78,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute"
                }
            }}
        >

            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={cartIcon} />
                }}
            />
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={homeIcon} />
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={profileIcon} />
                }}
            />
        </Tabs>
    )
}

export default Layout