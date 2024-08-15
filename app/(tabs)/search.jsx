import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchTab = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'primary' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View className="w-full justify-center items-center h-full px-4">
                        <Text className="text-3xl font-pblack">Search</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>

    )
}

export default SearchTab