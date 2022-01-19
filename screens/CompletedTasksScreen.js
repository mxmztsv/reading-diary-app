import React, {useCallback, useEffect, useState} from "react";
import {FlatList, RefreshControl, ScrollView} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";
import * as colors from "../config/Colors";
import {ListItem} from "../components/ListItem";
import {generateButtonHandler, getCompletedTasksList} from "../controllers/CompletedTasksController";
import {Button} from "../components/Button";
import {getParents} from "../controllers/ParentsScreenController";
import {stringToDate} from "../services/DateService";

export const CompletedTasksScreen = () => {

    const [tasksList, setTasksList] = useState([])
    const [countSelected, setCountSelected] = useState(0)
    const [refreshing, setRefreshing] = useState(false)


    useEffect(() => {
        const setData = async () => {
            setTasksList(await getCompletedTasksList())
        }
        setData()
        setCountSelected(0)
    },[])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setTasksList(await getCompletedTasksList())
        setCountSelected(0)
        setRefreshing(false)
    }, [])

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            author={item.author}
            subtitle={stringToDate(item.deadline)}
            onPress={() => {selectTask(item)}}
            color={colors.BACKGROUND}
            selectColor={colors.SECONDARY}
        />
    );

    const selectTask = (item) => {
        let isSelected = item.selected
        item.selected = !isSelected

        if(item.selected) {
            setCountSelected(countSelected => countSelected + 1)
        } else  {
            setCountSelected(countSelected => countSelected - 1)
        }

        // console.log(tasksList)
    }

    return (
        <Screen>
            <TitleWrapper>
                <Title>Формирование дневника</Title>
            <Description>
                Здесь находятся произведения, чтение которых вы завершили.
                Вы можете отметить нужные произведения и автоматически сформировать дневник по своим отчетам
            </Description>
            </TitleWrapper>
            <StatsTitleWrapper>
                <Title>Завершенные</Title>
                <Count>Выбрано: {countSelected}</Count>
            </StatsTitleWrapper>
            <FlatList
                style={{width: '100%'}}
                data={tasksList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.PRIMARY]}
                    />
                }
            />
            <ButtonWrapper>
                <Button
                    text="СФОРМИРОВАТЬ ДНЕВНИК"
                    color={colors.POSITIVE}
                    textColor={colors.BTN_TEXT}
                    active={!!countSelected}
                    onPress={async () => {await generateButtonHandler(tasksList)}}
                />
            </ButtonWrapper>
        </Screen>
    )
}

const Screen = styled.View`
    padding: 25px;
    width: 100%;
    height: 100%;  
    background: ${colors.BACKGROUND};
`;

const TitleWrapper = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
`
const Title = styled.Text`
    color: ${colors.PRIMARY_TEXT};
    font-size: 18px;
    font-weight: bold;
    text-align: justify;
    align-items: flex-start;
`

const Description = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 14px;
    text-align: justify;
    align-items: flex-start;
    margin-bottom: 10px;
    margin-top: 10px;
`
const Count = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 18px;
`

const StatsTitleWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`

    const ButtonWrapper = styled.View`
        justify-content: center;
        align-items: center;
    `
