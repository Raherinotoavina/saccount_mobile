import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import './styles/global.css';
import Register from '@/module/Authentication/Register/Register.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Home"
                options={{title: 'Overview'}}
                component={Register}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </QueryClientProvider>
    );
}
