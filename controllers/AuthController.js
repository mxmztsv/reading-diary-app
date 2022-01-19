import React, {useContext, useEffect, useState} from "react";
import {request} from "./HttpController";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from "react-native";

const storageName = 'userData'

export const signUp = async (login, password, name, surname, middleName, email, authContext) => {
    console.log('try to sign up...')
    if (login && password && name && surname && middleName && email && authContext) {
        let response
        try {
            response = await request('/account/sign-up', {login, password, name, surname, middleName, email, roleName: "student"}, 'POST')
        } catch (e) {
            ToastAndroid.show("Регистрация не удалась", ToastAndroid.SHORT);
            return
        }
        // const response = {
        //     "id": 14,
        //     "name": "Олег",
        //     "surname": "Зайцев",
        //     "middleName": "Олегович",
        //     "email": "6@gmail.com",
        //     "role": "parent"
        // }

        await AsyncStorage.setItem(storageName, JSON.stringify({...response}))
        authContext.setIsSignedIn(true)
        return response
    }

}

export const signIn = async (login, password, authContext) => {
    if (login && password && authContext) {
        let response
        try {
            response = await request('/account/sign-in', {login, password})
        } catch (e) {
            ToastAndroid.show("Вход не удался", ToastAndroid.SHORT);
            return
        }

        console.log('response', response)
        await AsyncStorage.setItem(storageName, JSON.stringify({...response}))
        authContext.setIsSignedIn(true)

        // const response = {
        //     "id": 14,
        //     "name": "Олег",
        //     "surname": "Зайцев",
        //     "middleName": "Олегович",
        //     "email": "6@gmail.com",
        //     "role": "parent"
        // }

        return response
    }
}

export const signOut = async (authContext) => {
    //request

    console.log('Выход')
    ToastAndroid.show("Выход", ToastAndroid.SHORT);
    await AsyncStorage.removeItem(storageName)
    authContext.setIsSignedIn(false)
    // window.location.href = '/'

    // getUserInfo()

}

export const getUserInfo = async () => {
    const data = await AsyncStorage.getItem(storageName)
    const userInfo = JSON.parse(data)
    console.log('userInfo', userInfo)
    if (userInfo) return userInfo
    return {
        token: null,
        name: null,
        surname: null,
        middleName: null,
        id: null,
    }
}

export const connectToParentById = async (parentId) => {
    const userInfo = await getUserInfo()
    const studentId = userInfo.id
    console.log('studentId', studentId)
    try {
        const response = await request('/account/connect', {parentId, studentId})
        ToastAndroid.show("Подключение выполнено", ToastAndroid.SHORT);
    } catch (e) {
        ToastAndroid.show("Что-то пошло не так", ToastAndroid.SHORT);
    }
}
