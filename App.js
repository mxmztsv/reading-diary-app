import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {AuthScreen} from "./screens/AuthScreen";
import {RegistrationScreen} from "./screens/RegistrationScreen";
import {ConnectionScreen} from "./screens/ConnectionScreen";
import {TimerScreen} from "./screens/TimerScreen";
import {ReviewScreen} from "./screens/ReviewScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as colors from './config/Colors'
import {MainScreen} from "./screens/MainScreen";
import {DetailsScreen} from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{
                headerStyle: {
                    backgroundColor: `${colors.PRIMARY}`,
                },
                headerTintColor: '#fff',
            }}>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="Timer" component={TimerScreen} options={{
                            title: 'Таймер чтения',
                        }}/>
                        <Stack.Screen name="Main" component={MainScreen} options={{
                            title: 'Список литературы',
                            headerShown: false
                        }}/>
                        <Stack.Screen name="Connection" component={ConnectionScreen} options={{
                            title: 'Подключение',
                            headerShown: false
                        }}/>
                        <Stack.Screen name="Details" component={DetailsScreen} options={{
                            title: 'Дневник',
                        }}/>
                        <Stack.Screen name="Review" component={ReviewScreen} options={{
                            title: 'Отчет',
                        }}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Auth" component={AuthScreen} options={{
                            title: 'Авторизация',
                            headerShown: false
                        }}/>
                        <Stack.Screen name="Registration" component={RegistrationScreen} options={{
                            title: 'Регистрация',
                            headerShown: false
                        }}/>
                    </>
                )
                }

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
