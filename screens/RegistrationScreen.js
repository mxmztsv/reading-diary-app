import React, {useEffect, useState} from 'react';
import {Alert, Linking, StatusBar, TouchableOpacity, Platform} from 'react-native';
import styled from 'styled-components/native';
import {Screen} from "../components/Screen";
import * as colors from '../config/Colors'
import {Button} from "../components/Button";



export const RegistrationScreen = () => {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <Screen>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
            <TitleWrapper>
                {/*<Logo/>*/}
                <Title>Зарегистрируйтесь</Title>
            </TitleWrapper>

            <Card>
                <LoginRow>
                    {/*<FieldIcon>*/}
                    {/*<MaterialCommunityIcons name="account" size={25} color="#7f7f7f" />*/}
                    {/*</FieldIcon>*/}
                    <LoginField placeholder={"Логин"} type="text" onChangeText={async (val) => {
                        setLogin(val.toString())
                    }}/>
                </LoginRow>
            </Card>
            <Card>
                <PassRow>
                    {/*<FieldIcon>*/}
                    {/*<MaterialCommunityIcons name="shield-key" size={25} color="#7f7f7f" />*/}
                    {/*</FieldIcon>*/}
                    <PassField placeholder={'pass'} secureTextEntry={true} onChangeText={async (val) => {
                        setPassword(val.toString())
                    }}/>
                </PassRow>
            </Card>
            <ButtonsRow>
                <ButtonWrapper>
                    <Button
                        text="ВХОД"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button
                        text="РЕГИСТРАЦИЯ"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </ButtonWrapper>
            </ButtonsRow>
        </Screen>
    )
}


const TitleWrapper = styled.View`
    align-items: center;
`;

const ButtonWrapper = styled.View`
    width: 48%;
`

const Title = styled.Text`
    color: black;
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 40px;
`;

const Description = styled.Text`
    color: #7f7f7f;
`;

const Card = styled.View`
    background-color: #fff;
    padding: 10px 15px 10px 15px;
    margin: 10px 15px 5px 15px;
    width: 90%;
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

const LoginField = styled.TextInput`
    align-items: center;
    width: 90%;
    color: ${colors.PRIMARY_TEXT};
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
