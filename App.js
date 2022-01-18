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
import {getUserInfo, signIn, signOut} from "./controllers/AuthController";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const App = () => {

    //todo: обновление экранов и контекст авторизации
    //todo: страница дневников

    const [isSignedIn, setIsSignedIn] = useState(true)

    // const initialLoginState = {
    //     isLoading: true,
    //     userName: null,
    //     userToken: null,
    // };
    //
    // const loginReducer = (prevState, action) => {
    //     switch( action.type ) {
    //         case 'RETRIEVE_TOKEN':
    //             return {
    //                 ...prevState,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //         case 'LOGIN':
    //             return {
    //                 ...prevState,
    //                 userName: action.id,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //         case 'LOGOUT':
    //             return {
    //                 ...prevState,
    //                 userName: null,
    //                 userToken: null,
    //                 isLoading: false,
    //             };
    //     }
    // };
    //
    // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    //
    // const authContext = React.useMemo(() => {
    //     return {
    //
    //         signIn: async (login, password) => {
    //             try {
    //                 // const studentName = await auth(login, pass);
    //                 await signIn(login, password);
    //                 // console.log('studentName: ', studentName);
    //                 //
    //                 // try {
    //                 //     await AsyncStorage.setItem('studentName', studentName);
    //                 //     await AsyncStorage.setItem('login', login);
    //                 //     await AsyncStorage.setItem('pass', pass);
    //                 // } catch(err) {
    //                 //     console.error(err);
    //                 // }
    //                 //
    //                 // dispatch({ type: 'LOGIN', id: login, token: studentName });
    //
    //
    //
    //                 try {
    //
    //                     const userInfo = await getUserInfo()
    //                     const userId = userInfo.id
    //
    //                     console.log('User id: ', userId);
    //
    //                     // try {
    //                     //     await AsyncStorage.setItem('studentName', info['name']);
    //                     //     await AsyncStorage.setItem('login', login);
    //                     //     await AsyncStorage.setItem('pass', pass);
    //                     // } catch(err) {
    //                     //     console.error(err);
    //                     // }
    //
    //                     dispatch({ type: 'LOGIN', id: login, token: userId });
    //
    //                 } catch (error) {
    //                     console.error(error.message);
    //                 }
    //
    //
    //             } catch (e) {
    //                 console.error( e.message );
    //                 Alert.alert("Что-то пошло не так", e.message,[
    //                     {text: "Понимаю"}
    //                 ])
    //                 // throw new Error("Вход не выполнен, повторите попытку");
    //                 // try {
    //                 //     await AsyncStorage.setItem('authStatus', e.message);
    //                 // } catch(err) {
    //                 //     console.error(err);
    //                 // }
    //             }
    //
    //         },
    //         signOut: async () => {
    //             await signOut();
    //             try {
    //                 await AsyncStorage.removeItem('userData');
    //             } catch(e) {
    //                 console.log(e);
    //             }
    //             dispatch({ type: 'LOGOUT' });
    //             // setIsLoading(false);
    //             // setUserToken(null);
    //         }
    //     };
    // }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth" screenOptions={{
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
                        <Stack.Screen name="Auth" component={AuthScreen} options={{
                            title: 'Авторизация',
                            headerShown: false
                        }}/>
                        <Stack.Screen name="Registration" component={RegistrationScreen} options={{
                            title: 'Регистрация',
                            headerShown: false
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
