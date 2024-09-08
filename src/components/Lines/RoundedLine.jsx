import { View, Text } from 'react-native'
import React from 'react'

export default function Line({item}) {
  return (
    <View className="items-center justify-center flex-1 py-2 flex-row bg-gray-100">
      <View 
        className="h-20 w-20 items-center justify-center rounded-full mx-2" 
        style=
        {{backgroundColor: `rgb(${item.Color.Color_R}, ${item.Color.Color_G}, ${item.Color.Color_B})`}}
      >

        <Text className="text-xl text-white font-bold drop-shadow-xl">{item.Name}</Text>
      
      </View>
      <Text numberOfLines={0} className="text-xl font-bold text-center flex-shrink">{item.LongDescription}</Text>
    </View>
  )
}