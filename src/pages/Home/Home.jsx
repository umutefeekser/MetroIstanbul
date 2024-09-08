import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import { CommonActions, StackActions, TabActions } from '@react-navigation/native';
import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import StatusIcon from '../../components/Home/StatusIcon'
import Line from '../../components/Home/Line'
import New from '../../components/Home/New'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default ({navigation}) => {

  useEffect(()=>{
    AsyncStorage.removeItem("fav")
  },[])

  const {data: equipmentData} = useFetch("MetroMobile/V2/GetFaultyEquipments")
  const {data: lineData} = useFetch("MetroMobile/V2/GetLines")
  const {data: mapData} = useFetch("MetroMobile/V2/GetMaps")
  const {data: newsData} = useFetch("MetroMobile/V2/GetNews/tr")

  const handlePressLine = (item) => {
    navigation.navigate("LinesPage", {
      screen: "LinePage",
      params: item,
      initial: false
    })
  }

  const renderStatus = ({item}) => <StatusIcon item={item} />
  const renderLine = ({item}) => <Line item={item} onPress={()=>handlePressLine(item)} />
  const renderNew = ({item}) => <New navigation={navigation} item={item} />

  if(!lineData || !equipmentData || !mapData || !newsData) return <ActivityIndicator className="flex-1 self-center" size="large" color="#1F285D" />

  if(lineData && equipmentData && mapData && newsData) return (
    <View className="flex-1 px-1 justify-center bg-mblue space-y-5">
        <View className="w-full">
          <View className="w-full bg-mred p-2 rounded-t-xl">
            <Text className="text-white text-center text-4xl">Ekipman Servis Durumu</Text>
          </View>

          <View className="w-full bg-mgray p-2 pt-0 rounded-b-xl">
            <FlatList 
              data={equipmentData.Data[0]?.EquipmentServiceStatus}
              renderItem={renderStatus}
              scrollEnabled={false}
              contentContainerStyle={{flexDirection:"row", justifyContent: 'space-between'}}
            />
          </View>
        </View>

        <View className="w-full">
          <View className="w-full bg-mdarkblue p-2 rounded-t-xl">
            <Text className="text-white text-center text-4xl">İstasyon Hizmetleri</Text>
          </View>

          <View className="w-full bg-mgray p-2 pt-0 rounded-b-xl">
            <FlatList 
              data={equipmentData.Data[0]?.StationServiceStatus.filter(i => i.Name !== "Bebek Odası")}
              renderItem={renderStatus}
              scrollEnabled={false}
              contentContainerStyle={{flexDirection:"row", justifyContent: 'space-between'}}
            />
          </View>
        </View>

        <View className="w-full space-y-2">
          <Text className="text-center font-bold border-b-2 text-4xl">Metro Hatları</Text>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={lineData.Data.filter(i => i.Name.startsWith("M"))}
            renderItem={renderLine}
          />
        </View>

        <View className="w-full">
          <Text className="text-center font-bold border-b-2 text-4xl">En Son Haberler</Text>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...newsData.Data.toReversed().slice(0,4), {last: true}]}
            renderItem={renderNew}
          />
        </View>
        
    </View>
  )
}