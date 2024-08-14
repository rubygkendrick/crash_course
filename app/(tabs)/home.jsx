import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Nail Tech</Text>
      <StatusBar style="auto"/>
    </View>
  )
}


export default Home