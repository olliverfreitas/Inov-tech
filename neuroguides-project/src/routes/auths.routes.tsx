import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Login  from '../auths/login';
import  Signup  from '../auths/signup';
import  Profile  from '../auths/profile';
import  MedicalReport  from '../auths/medicalreport';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthsRoutes(){
    return (
        <Navigator>
            <Screen 
                name="login"
                component={Login}
            />

            <Screen 
                name="signup"
                component={Signup}
            />

            <Screen 
                name="profile"
                component={Profile}
            />

            <Screen 
                name="medicalreport"
                component={MedicalReport}
            />

        </Navigator>
    )
}