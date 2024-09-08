import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function HomeLine({item, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="items-center w-28">
          <View 
          className="h-20 w-20 items-center justify-center rounded-full mx-2" 
          style=
          {{backgroundColor: `rgb(${item.Color.Color_R}, ${item.Color.Color_G}, ${item.Color.Color_B})`}}
          >
              <Text className="text-xl text-white font-bold drop-shadow-xl">{item.Name}</Text>
          </View>
          <Text className="text-lg text-center font-extrabold">{item.LongDescription.split("-")[0]} -</Text>
          <Text className="text-lg text-center font-extrabold">{item.LongDescription.split("-")[1].split(" Metro")[0]}</Text>

      </View>
    </TouchableWithoutFeedback>
  )
}