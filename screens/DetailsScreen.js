import React, {useState, useEffect, useCallback} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    RefreshControl
} from 'react-native';
import * as colors from "../config/Colors";
import styled from 'styled-components/native';
import {Button} from "../components/Button";
import {getStatisticsById} from "../controllers/DetailsScreenController";
import {ListItem} from "../components/ListItem";
import {FloatButton} from "../components/FloatButton";
import {getTasksList} from "../controllers/TaskScreenController";

export const DetailsScreen = ({ navigation, route }) => {

    const {item} = route.params

    // console.log('item', item.author)

    const [details, setDetails] = useState({
        title: '',
        author: '',
        readingTaskId: ''
    })
    const [refreshing, setRefreshing] = useState(false)
    const [statistics, setStatistics] = useState([])

    useEffect(() => {
        const setData = async () => {
            setDetails({
                title: item.name,
                author: item.author,
                readingTaskId: item.id
            })
            setStatistics(await getStatisticsById(item.id))
        }
        setData()
    },[])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setStatistics(await getStatisticsById(item.id))
        setRefreshing(false)
    }, [])

    const renderItem = ({ item }) => (
        <ListItem
            title={'Дата: ' + item.date}
            subtitle={item.readingStart + ' - ' + item.readingEnd + ' (' + item.duration + ')'}
        />
    );

    return (
        <Screen>
            <TitleWrapper>
                <TitleColumn>
                    <Title>{details.title}</Title>
                    <Author>{details.author}</Author>
                </TitleColumn>
                <ButtonWrapper>
                    <Button
                        text="ЗАВЕРШИТЬ"
                        color={colors.POSITIVE}
                        textColor={colors.BTN_TEXT}
                        onPress={() => navigation.navigate('Review', {details})}
                    />
                </ButtonWrapper>
            </TitleWrapper>
            <StatsTitleWrapper>
                <Title>Статистика</Title>
                <Count>Записей: {statistics.length}</Count>
            </StatsTitleWrapper>
            <FlatList
                style={{width: '100%'}}
                data={statistics}
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
            <FloatButton text='+' textColor={colors.BTN_TEXT} color={colors.POSITIVE} onPress={() => navigation.navigate('Timer', item.id)}/>
        </Screen>
    )
}

const Screen = styled.View`
    padding: 25px;
    width: 100%;
    height: 100%;  
    background: ${colors.BACKGROUND};
`;

const StatsTitleWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`

const TitleWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
`

const TitleColumn = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const ButtonWrapper = styled.View`
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
    color: ${colors.PRIMARY_TEXT};
    font-size: 18px;
    font-weight: bold;
    text-align: justify;
    align-items: flex-start;
`

const Author = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 18px;
    text-align: justify;
    align-items: flex-start;
`

const Count = styled.Text`
    color: ${colors.SECONDARY_TEXT};
    font-size: 18px;
`
