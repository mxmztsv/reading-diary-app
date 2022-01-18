import React, {useState, useEffect} from "react";
// import {Screen} from "../components/Screen";
import styled from 'styled-components/native';
import * as colors from '../config/Colors'
import {Alert, Linking, StatusBar, TouchableOpacity, Platform, TextInput, ScrollView} from 'react-native';
import {Button} from "../components/Button";
import {submit} from "../controllers/ReviewScreenController";

export const ReviewScreen = ( { route } ) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [characters, setCharacters] = useState(null)
    const [plot, setPlot] = useState(null)
    const [review, setReview] = useState(null)
    const [readingTaskId, setReadingTaskId] = useState(null)

    useEffect(() => {
        const {details} = route.params
        // console.log(details)
        setTitle(details.title)
        setAuthor(details.author)
        setReadingTaskId(details.readingTaskId)
    }, [])

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
                    onPress={async () => {await submit(readingTaskId, characters, plot, review)}}
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
    border-radius: 5px;
    border-color: aqua;
    border-style: solid;
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
    height: 100px;
    border-radius: 5px;
    border-color: ${colors.PRIMARY};
    border-style: solid;
    border-width: 1px;

`


const ButtonWrapper = styled.View`
    width: 100%;
`
