import React, {useState, useEffect} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
} from 'react-native';
import * as colors from "../config/Colors";
import styled from 'styled-components/native';
import {Button} from "../components/Button";
import {getStatistics} from "../controllers/DetailsScreenController";
import {ListItem} from "../components/ListItem";
import {FloatButton} from "../components/FloatButton";

export const DetailsScreen = ({ navigation }) => {

    const [details, setDetails] = useState({
        title: 'Капитанская дочка',
        author: 'А.С. Пушкин'
    })

    const [statistics, setStatistics] = useState([])

    useEffect(() => {
        setStatistics(getStatistics())
    },[])

    const renderItem = ({ item }) => (
        <ListItem
            title={item.date}
            subtitle={item.startTime + ' - ' + item.endTime + ' (' + item.duration + ')'}
            onPress={() => navigation.navigate('Details')}
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
                        onPress={() => navigation.navigate('Review')}
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
            />
            <FloatButton text='+' textColor={colors.BTN_TEXT} color={colors.POSITIVE} onPress={() => navigation.navigate('Timer')}/>
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
