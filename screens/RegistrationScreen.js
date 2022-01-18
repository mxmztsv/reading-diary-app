import React, {useEffect, useState} from 'react';
import {Alert, Linking, StatusBar, TouchableOpacity, Platform, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Screen} from "../components/Screen";
import * as colors from '../config/Colors'
import {Button} from "../components/Button";
import {signUp} from "../controllers/AuthController";



export const RegistrationScreen = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [middleName, setMiddleName] = useState(null);
    const [email, setEmail] = useState(null);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <Screen>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle={'light-content'}/>
            <ScrollView>

            <TitleWrapper>
                {/*<Logo/>*/}
                <Title>Зарегистрируйтесь</Title>
            </TitleWrapper>


            <Card>
                <Description>Имя</Description>
                <LoginRow>
                    <InputField placeholder={"Логин"} type="text" onChangeText={async (val) => {
                        setName(val.toString())
                    }}/>
                </LoginRow>
            </Card>

            <Card>
                <Description>Фамилия</Description>
                <LoginRow>
                    <InputField placeholder={"Фамилия"} type="text" onChangeText={async (val) => {
                        setSurname(val.toString())
                    }}/>
                </LoginRow>
            </Card>

            <Card>
                <Description>Отчество</Description>
                <LoginRow>
                    <InputField placeholder={"Отчество"} type="text" onChangeText={async (val) => {
                        setMiddleName(val.toString())
                    }}/>
                </LoginRow>
            </Card>

            <Card>
                <Description>E-mail</Description>
                <LoginRow>
                    <InputField placeholder={"E-mail"} type="text" onChangeText={async (val) => {
                        setEmail(val.toString())
                    }}/>
                </LoginRow>
            </Card>

            <Card>
                <Description>Придумайте логин</Description>
                <LoginRow>
                    {/*<FieldIcon>*/}
                    {/*<MaterialCommunityIcons name="account" size={25} color="#7f7f7f" />*/}
                    {/*</FieldIcon>*/}
                    <InputField placeholder={"Логин"} type="text" onChangeText={async (val) => {
                        setLogin(val.toString())
                    }}/>
                </LoginRow>
            </Card>
            <Card>
                <Description>Придумайте пароль</Description>
                <PassRow>
                    {/*<FieldIcon>*/}
                    {/*<MaterialCommunityIcons name="shield-key" size={25} color="#7f7f7f" />*/}
                    {/*</FieldIcon>*/}
                    <InputField placeholder={'pass'} secureTextEntry={true} onChangeText={async (val) => {
                        setPassword(val.toString())
                    }}/>
                </PassRow>
            </Card>
            <ButtonsRow>
                <ButtonWrapper>
                    <Button
                        text="РЕГИСТРАЦИЯ"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={() => {
                            signUp(login, password, name, surname, middleName, email)
                            // navigation.navigate('Connection')
                        }}
                    />
                </ButtonWrapper>
            </ButtonsRow>
            </ScrollView>
        </Screen>
    )
}


const TitleWrapper = styled.View`
    align-items: center;
`;

const ButtonWrapper = styled.View`
    width: 100%;
`

const Title = styled.Text`
    color: black;
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 0px;
`;

const Description = styled.Text`
    margin-left: 5px;
    margin-bottom: 3px;
    color: #7f7f7f;
`;

const Card = styled.View`
    background-color: #fff;
    padding: 10px 15px 10px 15px;
    //margin: 10px 15px 5px 15px;
    width: 100%;
    border-radius: 5px;

`;

const LoginRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

const FieldIcon = styled.View`
    align-items: center;
    width: 10%;
`;

const InputField = styled.TextInput`
    align-items: center;
    width: 100%;
    color: ${colors.PRIMARY_TEXT};
    border-width: 1.5px;
    border-radius: 5px;
    border-color: ${colors.SECONDARY};
`;

const PassRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ButtonsRow = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 90%;
    margin-top: 15px;
`

const PassField = styled.TextInput`
    align-items: center;
    width: 90%;
    color: ${colors.PRIMARY_TEXT};
`;
