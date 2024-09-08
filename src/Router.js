import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './pages/Home/Home'
import News from './pages/Home/News/News'
import New from './pages/Home/News/New'

import Lines from './pages/Lines/Lines'
import Line from './pages/Lines/Line'

import TLines from './pages/Times/Lines'
import TLine from './pages/Times/Line'

import LineMaps from './pages/LineMaps/LineMaps'

import Prices from './pages/Prices'

export default function Router() {

  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          title: "Haberler"
        }}
      >
        <Stack.Screen name="H_Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="NewsPage" component={News} />
        <Stack.Screen name="NewPage" component={New} />
      </Stack.Navigator>
    )
  }

  const LineStack = () => {
    return (
      <Stack.Navigator
      initialRouteName='L_LinesPage'
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="L_LinesPage" component={Lines} options={{headerShown: false}} />
        <Stack.Screen name="LinePage" component={Line} options={{headerShown: true, title: "M0"}} />
      </Stack.Navigator>
    )
  }

  const TimeStack = () => {
    return (
      <Stack.Navigator
      initialRouteName='T_LinesPage'
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="T_LinesPage" component={TLines} options={{headerShown: false}} />
        <Stack.Screen name="LinePage" component={TLine} options={{headerShown: true, title: "M0"}} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HomePage') {
                iconName = "home-outline"
              } else if (route.name === 'LinesPage') {
                iconName = "train-outline"
              } else if (route.name === 'TimesPage') {
                iconName = "time-outline"
              } else if (route.name === 'LineMapsPage') {
                iconName = "map-outline"
              } else if (route.name === 'PricesPage') {
                iconName = "cash-outline"
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#1F285D',
            headerShown: false
          })}
  
        >
            <Tab.Screen name="HomePage" component={HomeStack} options={{title: "Ana Sayfa"}} />
            <Tab.Screen name="LinesPage" component={LineStack} options={{title: "Hatlar"}} />
            <Tab.Screen name="TimesPage" component={TimeStack} options={{title: "Varış Saatleri"}} />
            <Tab.Screen name="LineMapsPage" component={LineMaps} options={{title: "Ağ Haritaları"}} />
            <Tab.Screen name="PricesPage" component={Prices} options={{title: "Ücretler"}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}