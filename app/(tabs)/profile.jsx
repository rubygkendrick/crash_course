import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'primary' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Text className="text-3xl font-pblack">Profile</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    </GestureHandlerRootView>

)
}

export default Profile

const styles = StyleSheet.create({})