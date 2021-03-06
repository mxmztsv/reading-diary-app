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
import {stringToDate} from "../services/DateService";


export const TasksScreen = ({ navigation }) => {

    const [tasksList, setTasksList] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        // async () => {setTasksList( await getTasksList())}
        const fetchData = async () => {
            setTasksList(await getTasksList())
        }
        fetchData()
        // setTasksList(getTasksList())
    },[])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setTasksList(await getTasksList())
        setRefreshing(false)
    }, [])

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            author={item.author}
            subtitle={'До ' + stringToDate(item.deadline)}
            onPress={() => navigation.navigate('Details', {item})}
        />
    );


    return (
        <Screen>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle={'light-content'}/>

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

        </Screen>
    )
}
