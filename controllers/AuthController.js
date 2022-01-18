import React, {useContext, useEffect, useState} from "react";
import {request} from "./HttpController";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageName = 'userData'

export const signUp = async (login, password, name, surname, middleName, email) => {
    console.log('try to sign up...')
    console.log('surname', surname)
    console.log('name', name)
    const response = await request('/account/sign-up', {login, password, name, surname, middleName, email, roleName: "student"}, 'POST')
    // const response = {
    //     "id": 14,
    //     "name": "Олег",
    //     "surname": "Зайцев",
    //     "middleName": "Олегович",
    //     "email": "6@gmail.com",
    //     "role": "parent"
    // }

    await AsyncStorage.setItem(storageName, JSON.stringify({...response}))
    // window.location.href = '/'
    return response
}

export const signIn = async (login, password) => {
    const response = await request('/account/sign-in', {login, password})
    console.log('response', response)

    // const response = {
    //     "id": 14,
    //     "name": "Олег",
    //     "surname": "Зайцев",
    //     "middleName": "Олегович",
    //     "email": "6@gmail.com",
    //     "role": "parent"
    // }
    await AsyncStorage.setItem(storageName, JSON.stringify({...response}))
    // window.location.href = '/'

    return response
}

export const signOut = async () => {
    //request

    console.log('Выход')
    await AsyncStorage.removeItem(storageName)
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
    const response = await request('/account/connect', {parentId, studentId})
}
