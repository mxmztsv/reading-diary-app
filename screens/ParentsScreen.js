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
import {ParentItem} from "../components/ParentItem";
import {getParents} from "../controllers/ParentsScreenController";
import {FloatButton} from "../components/FloatButton";

//todo: навигация на подключение не работает

export const ParentsScreen = ({ navigation }) => {

    const [parents, setParents] = useState([])

    useEffect(() => {
        const setData = async () => {
            setParents(await getParents())
        }
        setData()
    },[])

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
            />

            <FloatButton text='+' textColor={colors.BTN_TEXT} color={colors.POSITIVE} onPress={() => navigation.navigate('Connect')}/>
        </Screen>
    )
}
