import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Category({item, onPress, choosed, width}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View
            style={{width: width}} 
            className={`flex flex-1 border-red-100 space-y-2 h-32 ${choosed ? "bg-mred" : "bg-mdarkblue border-x-[1px]"} items-center justify-center`}
        >
            <Text className="text-white text-xl font-bold">{item}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}