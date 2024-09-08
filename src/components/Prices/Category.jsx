import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Category({item, onPress, choosed, width}) {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View
            style={{width: width}} 
            className={`flex flex-1 border-red-100 h-32 ${choosed ? "bg-mred" : "bg-mdarkblue border-x-[1px]"} items-center justify-center`}
        >
            <Ionicons name="card-outline" size={34} color="white" />
            <Text className="text-white text-lg font-bold text-center px-5">{item.Type}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}