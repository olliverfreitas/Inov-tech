import {Stack} from 'expo-router';

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="(login)/login" />
            <Stack.Screen name="(login)/signup" />
            <Stack.Screen name="(login)/profile" />
            <Stack.Screen name="(login)/medicalreport" />
        </Stack>
    )
}