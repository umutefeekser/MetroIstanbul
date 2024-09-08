import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function New({item, navigation, all=false}) {
if(item.last) return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("NewsPage")}>
        <View className="mx-4 bg-white justify-center items-center px-10 mt-4 rounded-lg">
            <AntDesign name="rightcircleo" size={30} color="black" />
            <Text className="text-xl font-bold">Tüm Haberler</Text>
            <Text className="text-xl font-bold">İçin Tıkla</Text>
        </View>
    </TouchableWithoutFeedback>    
)
  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("NewPage", item)}>
      <View className={`bg-white mx-4 mt-4 ${all && "mb-4"} rounded-lg ${all && "shadow-xl"} shadow-black`}>
        <Image source={{uri: item.Photo}} className="rounded-t-lg" style={{height: Dimensions.get("window").height/7, width: "100%"}} />
        {all ? 
        <Text className="p-2 text-lg font-bold">{item.Title}</Text> :
        <Text className="p-2 text-lg">{item.Title.substring(0, 57)}{item.Title.length > 57 && "..."}</Text>
        }
      </View>
    </TouchableWithoutFeedback>
  )
}