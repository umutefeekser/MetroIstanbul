import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../../hooks/useFetch'
import New from '../../../components/Home/New'

export default function News({navigation}) {

  const {data} = useFetch("MetroMobile/V2/GetNews/tr")

  const renderItem = ({item}) => <New navigation={navigation} item={item} all />

  if(!data) return <ActivityIndicator className="flex-1 self-center" size="large" color="#1F285D" />

  if(data) return (
    <View>
      <FlatList 
        data={data.Data.toReversed()}
        renderItem={renderItem}
      />
    </View>
  )
}