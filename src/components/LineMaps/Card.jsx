import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Card({item, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={()=>onPress(item)}>
      <View className="w-full items-center bg-mgray px-4 py-2 border-b-2 space-y-4" style={{minHeight: Dimensions.get("window").height / 3}}>
        <Text className="font-bold text-xl">{item.Title}</Text>
        <Image source={{uri: item.IconURL}} className="h-80 w-full" style={{resizeMode: "contain"}} />
      </View>
    </TouchableWithoutFeedback>
  )
}