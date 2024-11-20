import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link} from 'expo-router'

export default function TabsLayout(){
    return (
        <Tabs screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#FFFFFF',
                headerLeft: ()=> (
                    <Link href="/(chats)" asChild>
                        <FontAwesome size={30} name="commenting-o" color="#FFFFFF" style={{marginLeft: 20}} /> 
                    </Link> 
                ),
                headerRight: ()=> (
                    <Link href="/(profile)" asChild>
                        <FontAwesome size={30} name="user-o" color="#FFFFFF" style={{marginRight: 20}} />
                    </Link>
                )
        }}>
            <Tabs.Screen 
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={32} name="home" color="#FF69B4" />
                }}
            />
            <Tabs.Screen 
                name="map"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={32} name="map-marker" color="#67D0A9" />
                }}
            />
            <Tabs.Screen 
                name="activities"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={32} name="tasks" color="#FDCB76" />
                }}
            />
            <Tabs.Screen 
                name="profesionals"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={32} name="user-md" color="#5D9CEC" />
                }}
            />
           
         
            

        </Tabs>
    )
}