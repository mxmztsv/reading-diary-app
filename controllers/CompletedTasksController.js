import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";
import {BASE_URL} from "../config/API";
import {ToastAndroid} from "react-native";

export const getCompletedTasksList = async () => {
    // request

    const userInfo = await getUserInfo()
    const id = userInfo.id

    const data = await request('/main/completed-tasks', {id})

    console.log('data', data)

    // const data = [
    //     {
    //         'id': '123',
    //         'title': 'Капитанская дочка',
    //         'author': 'А.С. Пушкин',
    //         'date': `${new Date()}`
    //     },
    //     {
    //         'id': '456',
    //         'title': 'Война и Мир',
    //         'author': 'Лев Толстой',
    //         'date': `${new Date()}`
    //     },
    //     {
    //         'id': '789',
    //         'title': 'Герой нашего времени',
    //         'author': 'М.Ю. Лермонтов',
    //         'date': `${new Date()}`
    //     },
    // ]
    const tasks = data.map(item => {
        item['selected'] = false
        return item
    })
    console.log(tasks)
    return tasks
    // return data
}

export const getSelectedTasks = (tasksList) => {
    return tasksList.filter(task => task.selected === true)
}

export const generateDiary = async (selectedTasksList) => {
    if (selectedTasksList.length) {
        console.log('Sending a request to a diary generator...')

        const userInfo = await getUserInfo()
        const studentId = userInfo.id
        // const name = `новый_дневник_${new Date()}`
        const date = new Date()
        const name = `reading_diary_${date.getDay()}-${date.getMonth()}-${date.getFullYear()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`

        const readingTasksId = selectedTasksList.map(item => {
            return item.id
        })
        console.log('Selected tasks is: ', readingTasksId)


        // request
        // const response = await request('/main/generate-diary', {studentId, name, readingTasksId})
        const body = JSON.stringify({studentId, name, readingTasksId})
        const headers = {}
        headers['Content-Type'] = 'application/json'
        const method = 'POST'
        let response
        try {
            response = await fetch(BASE_URL + '/main/generate-diary', { method, body, headers })
            ToastAndroid.show("Дневник сформирован", ToastAndroid.SHORT);
        } catch (e) {
            ToastAndroid.show("Что-то пошло не так...", ToastAndroid.SHORT);
        }
        // const response = await fetch(BASE_URL + '/main/diary', { method, headers })
        console.log('response', response)
    }
}

export const generateButtonHandler = async (tasksList) => {
    await generateDiary(getSelectedTasks(tasksList))
}

// export const selectTask = (item) => {
//
// }
