import { Stack } from "expo-router";

export default function ChatsLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: 'Mensagens', headerTitleAlign: 'center'}} />
        </Stack>
    )
}