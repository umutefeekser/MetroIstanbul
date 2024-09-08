import { View, Text, Dimensions, ScrollView, ActivityIndicator, FlatList, useWindowDimensions } from 'react-native';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { RenderHTML } from 'react-native-render-html';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useFetch from '../../hooks/useFetch';

import Line from '../../components/Lines/RoundedLine';
import Station from '../../components/Lines/Station';
import { useFocusEffect } from '@react-navigation/native';

export default ({ navigation, route }) => {
  const line = route.params;

  useEffect(()=>{
    navigation.setOptions({
      headerTintColor: `rgba(${line.Color.Color_R}, ${line.Color.Color_G}, ${line.Color.Color_B}, 1)`,
      title: line.Name
    })
  },[navigation, route])

  const { data } = useFetch("MetroMobile/V2/GetStationById/" + line.Id);

  const renderItem = ({ item }) => <Station item={item} data={data.Data} />;

  if (!data)
    return (
      <ActivityIndicator
        className="flex-1 self-center"
        size="large"
        color="#1F285D"
      />
    );

    if(data) return (
    <View className="bg-white">
      <ScrollView>
        <View className="p-2 space-y-2">
          <Line item={line} />
          <View>
            <Text className="text-4xl font-bold text-center text-red-500 py-2">
              İstasyonlar
            </Text>
            <FlatList
              data={data.Data}
              horizontal
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <RenderHTML 
            contentWidth={Dimensions.get("window").width}
            source={{
              html: line.Content
              .replace(/11(\.0)?pt/g, "15pt")
              .replace(/12(\.0)?pt/g, "18pt"),
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}


