import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, TextInput, Platform} from 'react-native'
import React from 'react'

const InputField = ({ label, placeholder, icon, value, onChangeHandler, isSecured = false }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <TouchableWithoutFeedback>

            <View className="my-2 w-full">
                <Text className= "text-xl mb-3">
                    {label}
                </Text>

                <View className='flex flex-row justify-start items-center relative rounded-full bg-neutral-100 border border-neutral-100 focus:border-[#242B4D]'>
                    {icon && <Image source={icon} className="w-6 h-6 ml-4"/>}
                    <TextInput
                        className='rounded-full p-4 text-[15px] flex-1 tex-left'
                        secureTextEntry={isSecured}
                        value = {value}
                        onChangeText={onChangeHandler}
                        placeholder={placeholder}
                    />
                </View>
            </View>

        </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}

export default InputField

const styles = StyleSheet.create({})