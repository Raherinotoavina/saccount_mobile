import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import './styles/global.css';
import Login from '@/module/Authentication/Login/Login.tsx';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Home"
                options={{title: 'Overview'}}
                component={Login}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}
