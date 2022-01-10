import React, {useState, useEffect} from "react";
// import {Screen} from "../components/Screen";
import styled from 'styled-components/native';
import * as colors from '../config/Colors'
import {Alert, Linking, StatusBar, TouchableOpacity, Platform, TextInput, ScrollView} from 'react-native';
import {Button} from "../components/Button";

export const ReviewScreen = () => {

    const [title, setTitle] = useState('Капитанская дочка')
    const [author, setAuthor] = useState('А.С. Пушкин')
    const [characters, setCharacters] = useState(null)
    const [plot, setPlot] = useState(null)
    const [review, setReview] = useState(null)

    const submit = () => {
        console.log('characters', characters)
        console.log('plot', plot)
        console.log('review', review)
    }


    return (
        <Screen>
            <ScrollView>
                <TitleWrapper>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </TitleWrapper>
            <Description>
                Вы можете заполнить отчет о прочтении произведения - это позволит в будущем легко освежить в памяти содержание произведения.
                Также по своим отчетам вы сможете автоматически сформировать готовый читательский дневник для школы.
            </Description>
            <InputBox>
                <Input
                    onChangeText={setCharacters}
                    value={characters}
                    multiline={true}
                />
                <Label>Главные герои</Label>
            </InputBox>
            <InputBox>
                <Input
                    onChangeText={setPlot}
                    value={plot}
                    multiline={true}
                />
                <Label>Сюжет</Label>
            </InputBox>
            <InputBox>
                <Input
                    onChangeText={setReview}
                    value={review}
                    multiline={true}
                />
                <Label>Мое мнение (отзыв)</Label>
            </InputBox>

            <ButtonWrapper>
                <Button
                    text="СОХРАНИТЬ"
                    color={colors.POSITIVE}
                    textColor={colors.BTN_TEXT}
                    onPress={submit}
                />
            </ButtonWrapper>
            </ScrollView>

        </Screen>
    )
}

const TitleWrapper = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
`

const InputBox = styled.View`
    flex-direction: column;
    margin-bottom: 15px;
`

const Title = styled.Text`
    color: ${colors.PRIMARY_TEXT};
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    text-align: justify;
    align-items: flex-start;
`

const Author = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 18px;
    width: 100%;
    text-align: justify;
    align-items: flex-start;
`

const Description = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 14px;
    width: 100%;
    text-align: justify;
    align-items: flex-start;
    margin-bottom: 20px;
`

const Label = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 14px;
    width: 100%;
    text-align: justify;
    align-items: flex-start;
    padding-left: 20px;
    margin-top: 5px;
`

const Screen = styled.View`
    padding: 25px;
    width: 100%;
    height: 100%;  
    background: ${colors.BACKGROUND};
`;

const Input = styled.TextInput`
    color: ${colors.PRIMARY_TEXT};
    background: white;
    border-radius: 5px;
    height: 100px;
`


const ButtonWrapper = styled.View`
    width: 100%;
`
