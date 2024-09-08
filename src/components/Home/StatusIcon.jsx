import { View, Text, Image } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function StatusIcon({item}) {

  return (
    <View className="space-y-1 w-24">
        <Text numberOfLines={1} className="text-[10px] text-center border-b-[1px]">{item.Name}</Text>
        <View className="flex-row items-center">
            <Animated.Image className="h-9 w-9 mr-1" source={{uri: item.Icon}} />
            <View className="w-12">
                <View className="flex-row justify-between items-center">
                    <Text className="text-[10px]">{item.Active}</Text>
                    <AntDesign name="checkcircleo" size={10} color="green" />
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-[10px]">{item.Inactive}</Text>
                    <FontAwesome name="exclamation-triangle" size={10} color="orange" />
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-[10px]">%{((item.Active - item.Inactive)*100/item.Active).toString().substring(0,5)}</Text>
                    <AntDesign name="checkcircleo" size={10} color="green" />
                </View>
            </View>
        </View>
    </View>
  )
}