import {Stack} from 'expo-router';
import React from 'react'

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="signup" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="medicalreport" />
        </Stack>
    )
}