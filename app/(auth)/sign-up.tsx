import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

import { auth, db } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";

import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'

import nameIcon from '@/assets/images/icons/person.png'
import emailIcon from '@/assets/images/icons/email.png'
import passIcon from '@/assets/images/icons/lock.png'


const SignUp = () => {

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    password: ""
  })

  async function onSubmit() {
    try {
      const response = await createUserWithEmailAndPassword(auth, form.email, form.password)
      if (response.user.uid) {
        createUserDB(response.user.uid)
        //navigate('/', {replace: true})
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  async function createUserDB(uid) {
    try {
      await setDoc(doc(db, 'Users', uid), {
        Name: form.name,
        Address: form.address,
        Email: form.email
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <ScrollView className='flex-1 bg-white'>

      <View className='flex-1 bg-white'>

        <View className='relative w-full h-[200px]'>
          <View className='z-0 w-full h-[200px] bg-primary-100'>
          </View>

          <Text className='text-2xl text-white absolute bottom-5 left-5'>
            Create Your Account
          </Text>
        </View>

        <View className='p-5'>

          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={nameIcon}
            value={form.name}
            onChangeHandler={(value) => setForm({ ...form, name: value })}
          />

          <InputField
            label="Address"
            placeholder="Enter your Address"
            icon={emailIcon}
            value={form.address}
            onChangeHandler={(value) => setForm({ ...form, address: value })}
          />

          <InputField
            label="Email"
            placeholder="Enter your Email Address"
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
            title="Sign Up"
            classNames="mt-10"
            onPress={onSubmit}
          />

          <Text className='text-lg text-center text-gray-500 mt-10'>
            Already have an account? <Link className='text-violet-500' href="/(auth)/sign-in">Sign In</Link>
          </Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default SignUp