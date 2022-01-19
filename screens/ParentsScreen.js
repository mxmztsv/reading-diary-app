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
    FlatList, RefreshControl
} from 'react-native';
import * as colors from "../config/Colors";
import {ParentItem} from "../components/ParentItem";
import {getParents} from "../controllers/ParentsScreenController";
import {FloatButton} from "../components/FloatButton";
import {getTasksList} from "../controllers/TaskScreenController";

export const ParentsScreen = ({ navigation }) => {

    const [parents, setParents] = useState([])
    const [refreshing, setRefreshing] = useState(false)


    useEffect(() => {
        const setData = async () => {
            setParents(await getParents())
        }
        setData()
    },[])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setParents(await getParents())
        setRefreshing(false)
    }, [])

    const renderItem = ({ item }) => (
        <ParentItem
            name={item.surname + ' ' + item.name + ' ' + item.middleName}
            id={item.id}
            />
    );

    return (
        <Screen>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle={'light-content'}/>

            <FlatList
                style={{width: '100%'}}
                data={parents}
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

            <FloatButton text='+' textColor={colors.BTN_TEXT} color={colors.POSITIVE} onPress={() => navigation.navigate('Connection')}/>
        </Screen>
    )
}
