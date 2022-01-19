import {Screen} from "../components/Screen";
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
import {getTasksList} from "../controllers/TaskScreenController";
import {ListItem} from "../components/ListItem";
import {getDiariesList, getDiaryById} from "../controllers/DiariesScreenController";
import {stringToDate, stringToDateWithTime} from "../services/DateService";


export const DiariesScreen = ({ navigation }) => {

    const [diariesList, setDiariesList] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setDiariesList(await getDiariesList())
        }
        fetchData()
    },[])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setDiariesList(await getDiariesList())
        setRefreshing(false)
    }, [])

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={stringToDateWithTime(item.creationDate)}
            onPress={async () => {
                const path = await getDiaryById(item.id, item.name)
                navigation.navigate('PdfView', {path})
            }}
        />
    );


    return (
        <Screen>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle={'light-content'}/>

            <FlatList
                style={{width: '100%'}}
                data={diariesList}
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

        </Screen>
    )
}
