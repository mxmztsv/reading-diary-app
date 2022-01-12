import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TasksScreen} from "./TasksScreen";
import * as colors from "../config/Colors";
import {ParentsScreen} from "./ParentsScreen";
import {CompletedTasksScreen} from "./CompletedTasksScreen";
import {ProfileScreen} from "./ProfileScreen";

const Drawer = createDrawerNavigator();

export const MainScreen = () => {

    return (
        <Drawer.Navigator initialRouteName="Tasks" screenOptions={{
            headerStyle: {
                backgroundColor: `${colors.PRIMARY}`,
            },
            headerTintColor: '#fff',
        }}>
            <Drawer.Screen name="Tasks" component={TasksScreen} options={{
                title: 'Список литературы',
            }}/>
            <Drawer.Screen name="Parents" component={ParentsScreen} options={{
                title: 'Родители',
            }}/>
            <Drawer.Screen name="Completed" component={CompletedTasksScreen} options={{
                title: 'Прочитанные произведения',
            }}/>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                title: 'Профиль',
            }}/>
        </Drawer.Navigator>
    )
}
