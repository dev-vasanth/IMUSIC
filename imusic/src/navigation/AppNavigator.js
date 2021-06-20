import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AudioList from '../screens/AudioList'
import Player from '../screens/Player'
import PlayerList from '../screens/PlayList'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwsome from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator()


function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="audioList" component={AudioList}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name='headset' size={size} color={color} />
        }}
      />
      <Tab.Screen name="player" component={Player}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwsome name='compact-disc' size={size} color={color} />
        }}
      />
      <Tab.Screen name="playList" component={PlayerList}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name='my-library-music' size={size} color={color} />
        }}

      />
    </Tab.Navigator>
  )
}



export default AppNavigator
