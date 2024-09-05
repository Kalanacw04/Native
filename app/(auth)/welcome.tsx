import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

import dog from "../../assets/images/Ideas.png";
import { router } from 'expo-router';

const Welcome = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-primary-100">

      <View className="flex flex-row justify-center items-center ">
        <View className='mt-10 w-[75%]'>

          <Text className='text-4xl text-center text-white'>
            <Text className='font-extralight text-center'>HealthyPet</Text>
          </Text>

          <Text className='mt-10 mb-5 text-4xl text-center text-white'>
            Helping you to keep <Text className=' font-bold text-center'>your bestie</Text> stay healthy!
          </Text>
        </View>
      </View>

      <CustomButton
        onPress={() => router.push("/(auth)/sign-in")}
        title="Get Started"
        classNames="w-11/12"
      />

      <Image
        source={dog}
        className='w-[100%] h-[55%]'
        resizeMode='cover'
      />


    </SafeAreaView>
  )
}

export default Welcome