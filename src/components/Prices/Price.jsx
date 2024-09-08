import { View, Text } from 'react-native'
import React from 'react'

export default function Price({item}) {
  return (
    <View className="w-full my-3 bg-white justify-between flex-row h-20 px-5 items-center rounded-lg">
      <Text className="text-xl font-bold">{item.Name}</Text>
      <Text className="text-xl font-bold">{item.Price}</Text>
    </View>
  )
}