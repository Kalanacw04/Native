import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'

import emailIcon from '@/assets/images/icons/email.png'
import passIcon from '@/assets/images/icons/lock.png'


const SignIn = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  return (
    <ScrollView className='flex-1 bg-white'>

      <View className='flex-1 bg-white'>

        <View className='relative w-full h-[200px]'>
          <View className='z-0 w-full h-[200px] bg-primary-100'>
          </View>

          <Text className='text-2xl text-white absolute bottom-5 left-5'>
            Welcome
          </Text>
        </View>

        <View className='p-5'>

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={emailIcon}
            value={form.email}
            onChangeHandler={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={passIcon}
            value={form.password}
            onChangeHandler={(value) => setForm({ ...form, password: value })}
            isSecured={true}
          />

          <CustomButton 
            title="Sign In"
            classNames="mt-10"
            onPress={() => router.push("/(root)/(tabs)/home")}             
          />

          <Text className='text-lg text-center text-gray-500 mt-10'>
            Don't have an account? <Link className='text-violet-500' href="/(auth)/sign-up">Sign Up</Link>
          </Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default SignIn