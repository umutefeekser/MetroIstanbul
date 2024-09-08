import { View, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

import Line from '../../components/Lines/Line'
import Category from '../../components/Lines/Category'

export default ({navigation, route}) => {

  // useEffect(()=>{
  //   if(route.params.item !== null) navigation.navigate("LinePage", route.params.item)
  // },[])

  const categories = ["Metro", "Tramvay", "Füniküler", "Teleferik"]
  const [choosed, setChoosed] = useState("Metro")

  const {data} = useFetch("MetroMobile/V2/GetLines")
  
  const itemWidth = Dimensions.get("window").width / categories.length

  const renderLine = ({item}) => <Line item={item} onPress={()=>navigation.navigate("LinePage", item)} />
  const renderCategory = ({item}) => <Category 
    item={item} 
    choosed={choosed == item} 
    width={itemWidth} 
    onPress={()=>setChoosed(item)} 
  />


  if(!data) return <ActivityIndicator className="flex-1 self-center" size="large" color="#1F285D" />

  if(data) return (
    <View className="flex-1 px-1 pt-10 justify-center bg-mblue space-y-4">
      <FlatList 
        data={categories}
        renderItem={renderCategory}
        scrollEnabled={false}
        horizontal
      />
      <FlatList
        data={data.Data.filter(i=>i.LongDescription.includes(choosed))}
        key={1}
        numColumns={3}
        renderItem={renderLine}
      />
    </View>
  )
}