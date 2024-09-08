import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html'

export default ({route}) => {

  const New = route.params

  const style = {
    strong: {
      fontSize: "20px"
    },
    p: {
      fontSize: "18px"
    }
  }

  return (
    <View>
      <ScrollView>
        <Image 
          source={{uri: New.Photo}}
          style={{
            width: "100%",
            height: Dimensions.get("window").height / 6
          }}
        />
        <View className="p-1">
          <Text className="font-bold text-mdarkblue text-4xl py-2">{New.Title}</Text>
          <RenderHTML 
            contentWidth={Dimensions.get("window").width}
            source={{
              html: New.Content
            }}
            tagsStyles={style}
          />
        </View>
      </ScrollView>
      
    </View>
  )
}