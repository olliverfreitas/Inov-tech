import {Stack} from 'expo-router';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Layout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" />
            <Stack.Screen name="signup" />
            <Stack.Screen name="profile" />
            <Stack.Screen name='medicalreport' />
        </Stack>
    )
}