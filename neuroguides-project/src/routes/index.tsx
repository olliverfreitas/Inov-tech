import { NavigationContainer } from '@react-navigation/native';

import { AuthsRoutes } from './auths.routes';

export function Routes(){
    return (
        <NavigationContainer>
            <AuthsRoutes />
        </NavigationContainer>
    )
}