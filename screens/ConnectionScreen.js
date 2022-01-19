import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {Screen} from "../components/Screen";
import * as colors from '../config/Colors'
import {Button} from "../components/Button";
import {connectToParentById} from "../controllers/AuthController";


export const ConnectionScreen = ({navigation}) => {

    const [parentID, setParentID] = useState(null);

    return (
        <Screen>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle={'light-content'}/>
            <TitleWrapper>
                {/*<Logo/>*/}
                <Title>Подключение</Title>
                <Subtitle>Чтобы в приложении появился список литературы, необходимо подключить аккаунт хотябы одного родителя.
                    Для этого введите ID родителя в поле ниже</Subtitle>
            </TitleWrapper>

            <Card>
                <LoginRow>
                    {/*<FieldIcon>*/}
                    {/*<MaterialCommunityIcons name="account" size={25} color="#7f7f7f" />*/}
                    {/*</FieldIcon>*/}
                    <Description>ID Родителя</Description>
                    <LoginField placeholder={"ID"} type="text" onChangeText={async (val) => {
                        setParentID(val.toString())
                    }}/>
                </LoginRow>
            </Card>
            <ButtonsRow>
                <ButtonWrapper>
                    <Button
                        text="ПОДКЛЮЧИТЬ"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={() => connectToParentById(parentID)}
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button
                        text="ЗАКРЫТЬ"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={() => navigation.navigate('Main')}
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

const Subtitle = styled.Text`
  color: ${colors.SECONDARY_TEXT};
  text-align: center;
  padding-horizontal: 10px;
  font-size: 14px;
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
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const FieldIcon = styled.View`
  align-items: center;
  width: 10%;
`;

const LoginField = styled.TextInput`
  align-items: center;
  font-size: 20px;
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
