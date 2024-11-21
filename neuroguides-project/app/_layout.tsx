import {Stack} from 'expo-router';
import React from 'react'

export default function RootLayout(){
    return(
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(profile)" />
            <Stack.Screen name="(chats)" />
        </Stack>
    )
}