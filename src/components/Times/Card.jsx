import { View, Text } from 'react-native'
import React from 'react'

export default function Card({data, item}) {
  return (
    <View className="flex-row items-center justify-between my-4 py-2 px-4 rounded-lg bg-white">
      <Text className="text-lg font-bold text-black">{data.FirstStation} - {data.LastStation}</Text>
      <Text className="text-xl font-bold text-white px-4 py-2 bg-mred">{item}</Text>
    </View>
  )
}