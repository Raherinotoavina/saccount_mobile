import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, PaperProvider} from 'react-native-paper';

function HomeScreen() {
    const {navigate} = useNavigation<{
        navigate: (v: string) => void;
    }>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button mode="contained-tonal" onPress={() => navigate('Detail')}>
                Go to Details
            </Button>
        </View>
    );
}

function DetailScreen() {
    const {goBack} = useNavigation<{goBack: () => void}>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail screen</Text>
            <Button onPress={goBack}>Go back</Button>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Overview'}}
            />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <RootStack />
            </PaperProvider>
        </NavigationContainer>
    );
}
