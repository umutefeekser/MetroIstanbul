import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Dimensions, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import useFetch from '../../hooks/useFetch';

import Dropdown from '../../components/Times/Dropdown';
import Button from '../../components/Times/Button';
import Category from '../../components/Times/Category';
import Card from '../../components/Times/Card';

export default ({ navigation, route }) => {
  const line = route.params;

  useEffect(()=>{
    navigation.setOptions({
      headerTintColor: `rgba(${line.Color.Color_R}, ${line.Color.Color_G}, ${line.Color.Color_B}, 1)`,
      title: line.Name
    })
  },[navigation, route])

  const { data: stationData } = useFetch("MetroMobile/V2/GetStationById/" + line.Id);
  const { data: directionData } = useFetch("MetroMobile/V2/GetDirectionById/" + line.Id);

  const [stations, setStations] = useState(null)
  const [directions, setDirections] = useState(null)
  
  const [station, setStation] = useState(null);
  const [direction, setDirection] = useState(null);

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(()=>{
    if(stationData) {
      setStations(stationData.Data.map(i => 
        {
          return {
            label: i.Description,
            value: i.Id
          }
        }
      ))
      setStation(stationData.Data[0].Id)
    }

    if(directionData) {
      setDirections(directionData.Data.map(i => 
        {
          return {
            label: i.DirectionName,
            value: i.DirectionId
          }
        }
      ))
      setDirection(directionData.Data[0].DirectionId)
      console.log(directionData.Data)
    }
  },[stationData, directionData])


  const handleClick = () => {
    setLoading(true)
    axios.post("https://api.ibb.gov.tr/MetroIstanbul/api/MetroMobile/V2/GetTimeTable", {
      "BoardingStationId": station,
      "DirectionId": direction,
      "DateTime": new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString()
    })
    .then((res) => {
      setData(res.data.Data[0])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>setLoading(false))
  }

  const renderItem = ({item}) => <Card data={data} item={item} />

  if (!stationData || !directionData || !stations || !directions)
    return (
      <ActivityIndicator
        className="flex-1 self-center"
        size="large"
        color="#1F285D"
      />
    );

    if (stationData && directionData && stations && directions) return (
    <View className="flex-1 p-2">
      <Text className="text-3xl font-bold text-red-500 py-2">İstasyon ve Yön Seçimi Yapınız</Text>
      <Dropdown data={stations} value={station} setValue={setStation} />
      <Dropdown data={directions} value={direction} setValue={setDirection} />
      <Button text="Görüntüle" onPress={handleClick} />
      <View className="mt-4 flex-1">
        {loading &&
          <ActivityIndicator
            size="large"
            color="#1F285D"
          />
        }
        {!loading && data && 
          <FlatList 
            data={data.TimeInfos.Times}
            renderItem={renderItem}
          />
        }
      </View>
    </View>
  );
}


//.filter(i => !i.label.startsWith(stations[0].label) || !i.label.startsWith(stations.toReversed()[0].label))