import {Stack} from 'expo-router';
import React from 'react'

export default function AuthLayout(){
    return(
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="signup" />
            <Stack.Screen name="profileimg" />
            <Stack.Screen name="medicalreport" />
        </Stack>
    )
}