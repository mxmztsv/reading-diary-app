import React, {useEffect, useState} from "react";
import {FlatList, ScrollView} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";
import * as colors from "../config/Colors";
import {Button} from "../components/Button";
import {Screen} from "../components/Screen";
import {generateButtonHandler} from "../controllers/CompletedTasksController";
import {getUserInfo, signOut} from "../controllers/AuthController";

export const ProfileScreen = () => {

    const [name, setName] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        const setData = async () => {
            const userInfo = await getUserInfo()
            setName(userInfo.name + ' ' + userInfo.middleName + ' ' + userInfo.surname)
            setId(userInfo.id)
        }
        setData()
    },[])

    return (
        <Screen>
            <Avatar/>
            <Name>{name}</Name>
            <Id>{id}</Id>

            <ButtonWrapper>
                <Button
                    text="ВЫХОД"
                    color={colors.POSITIVE}
                    textColor={colors.BTN_TEXT}
                    onPress={async () => {
                        await signOut()
                    }}
                />
            </ButtonWrapper>
        </Screen>
    )
}

const Avatar = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background: ${colors.PRIMARY};
    margin-bottom: 20px;
`

const Name = styled.Text`
    color: ${colors.PRIMARY_TEXT};
    font-size: 24px;
`

const Id = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 18px;
`

const ButtonWrapper = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`
