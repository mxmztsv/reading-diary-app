import {Screen} from "../components/Screen";
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
import {getTasksList} from "../controllers/TaskScreenController";
import {ListItem} from "../components/ListItem";


export const TasksScreen = ({ navigation }) => {

    const [tasksList, setTasksList] = useState([])

    useEffect(() => {
        // async () => {setTasksList( await getTasksList())}
        const fetchData = async () => {
            setTasksList(await getTasksList())
        }
        fetchData()
        // setTasksList(getTasksList())
    },[])

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            author={item.author}
            subtitle={'До ' + item.deadline}
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
            />

        </Screen>
    )
}
