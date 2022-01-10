import {ListItem} from "../components/ListItem";
import React from "react";

export const getTasksList = () => {
    // request
    console.log('Sending request for a tasks...')
    const data = [
        {
            'id': '123',
            'title': 'Капитанская дочка',
            'author': 'А.С. Пушкин',
            'deadline': `${new Date()}`
        },
        {
            'id': '456',
            'title': 'Война и Мир',
            'author': 'Лев Толстой',
            'deadline': `${new Date()}`
        },
        {
            'id': '789',
            'title': 'Герой нашего времени',
            'author': 'М.Ю. Лермонтов',
            'deadline': `${new Date()}`
        },

    ]
    return data
}

// export const renderItem = ({ item } ) => (
//     <ListItem
//         title={item.title}
//         author={item.author}
//         subtitle={'До ' + item.deadline}
//         onPress={() => navigation.navigate('Connection')}
//     />
// );
