import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-mdarkblue rounded-xl py-4">
        <Text className="text-white text-xl font-bold text-center">{text}</Text>
      </View>
    </TouchableOpacity>
  )
}