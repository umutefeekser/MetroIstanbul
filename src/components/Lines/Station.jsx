import { View, Text } from 'react-native'
import React from 'react'

export default function Station({item, data}) {
  return (
    <View className="items-center min-w-[140px]">
      <View className="h-2 min-w-full absolute bg-gray-400 mt-4" />
      <View className="border-4 h-10 w-10 bg-white border-gray-400 rounded-full" />
      <Text className="font-bold text-lg text-mdarkblue">{item.Description}</Text>
    </View>
  )
}