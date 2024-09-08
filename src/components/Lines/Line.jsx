import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Line({item, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="items-center flex-1 m-1 p-1 space-y-2 bg-gray-100">
          <View 
          className="h-20 w-20 items-center justify-center rounded-full mx-2" 
          style=
          {{backgroundColor: `rgb(${item.Color.Color_R}, ${item.Color.Color_G}, ${item.Color.Color_B})`}}
      >
              <Text className="text-xl text-white font-bold drop-shadow-xl">{item.Name}</Text>
          </View>
          <View>
            <Text className="text-md font-bold text-center">{item.LongDescription.split("-")[0]}-</Text>
            <Text className="text-md font-bold text-center">{item.LongDescription.split("-")[1]}</Text>
          </View>

      </View>
    </TouchableWithoutFeedback>
  )
}