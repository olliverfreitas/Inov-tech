import { Stack, Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ProfileScreens(){
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    title:'',
                    headerLeft: ()=>(
                        <Link href="/(tabs)">
                            <FontAwesome size={20} name="chevron-left" color="#000000" />
                        </Link>
                    ),
                    headerRight: ()=>(
                        <Link href="/editprofile">
                            <FontAwesome size={26} name="edit" color="#000000" />
                        </Link>
                    )
                }}
            />
            <Stack.Screen name="editprofile" 
                options={{
                    title:'',
                    headerLeft: ()=>(
                        <Link href="/">
                            <FontAwesome size={20} name="chevron-left" color="#000000" />
                        </Link>
                    )
                }}
            />
        </Stack>
    )
}