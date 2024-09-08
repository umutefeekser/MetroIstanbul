import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import useFetch from '../../hooks/useFetch'

import Card from '../../components/LineMaps/Card'
import ImageView from "react-native-image-viewing";

export default ({navigation}) => {

  const [visible, setVisible] = useState(false)
  const [url, setUrl] = useState(null)

  const {data} = useFetch("MetroMobile/V2/GetMaps")

  const handlePress = (item) => {
    setUrl(item.ImageURL)
    setVisible(true)
    //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  const renderItem = ({item}) => <Card onPress={handlePress} item={item} />

  if(!data) return <ActivityIndicator className="flex-1 self-center" size="large" color="#1F285D" />

  if(data) return (
    <View className="flex-1 px-1 pt-10 justify-center bg-mgray space-y-4">
      <FlatList
        data={data.Data.filter(i => i.IsActive)}
        renderItem={renderItem}
      />
      <ImageView
        images={[
          {
                  uri: url
          },
        ]}
        imageIndex={0}
        visible={visible}
        onRequestClose={()=>{
          setVisible(false)
         //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }}
      />


    </View>
  )
}