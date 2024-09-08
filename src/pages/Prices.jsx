import { View, Text, ActivityIndicator, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Category from '../components/Prices/Category'
import Price from '../components/Prices/Price'

export default () => {

  const {data} = useFetch("MetroMobile/V2/GetTicketPrice/tr")
  
  
  const [choosed, setChoosed] = useState("Anonim İstanbul Kart")
  
  const handleChoose = (item) => {
    setChoosed(item.Type)
  }

  const width = Dimensions.get("window").width / 3

  const renderCategory = ({item}) => <Category item={item} width={width} choosed={item.Type == choosed} onPress={()=>handleChoose(item)} />
  const renderPrice = ({item}) => <Price item={item} />
  
  if(!data) return <ActivityIndicator className="flex-1 self-center" size="large" color="#1F285D" />

if(data) return (
  <View className="flex-1 bg-mblue">
    <View className="pt-20">
      <FlatList 
        data={data.Data}
        renderItem={renderCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
    <View className="mt-2 px-1">
      <FlatList 
        data={data.Data.find(i => i.Type == choosed).TicketPrices}
        renderItem={renderPrice}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  </View>
)

}