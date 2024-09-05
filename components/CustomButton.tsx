import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, title, classNames } : { onPress: () => void; title: string; 
classNames: string; }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        className={`p-3 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 bg-violet-500 mb-5 ${classNames}`}
    >
        <Text className="text-lg font-bold text-white">
            {title}
        </Text>

    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})