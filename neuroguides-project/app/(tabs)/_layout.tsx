import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout(){
    return (
        <Tabs>
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
                    tabBarIcon: ({color}) => <FontAwesome size={32} name="group" color="#5D9CEC" />
                }}
            />

        </Tabs>
    )
}