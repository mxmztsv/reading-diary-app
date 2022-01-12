export const getCompletedTasksList = () => {
    // request
    const data = [
        {
            'id': '123',
            'title': 'Капитанская дочка',
            'author': 'А.С. Пушкин',
            'date': `${new Date()}`
        },
        {
            'id': '456',
            'title': 'Война и Мир',
            'author': 'Лев Толстой',
            'date': `${new Date()}`
        },
        {
            'id': '789',
            'title': 'Герой нашего времени',
            'author': 'М.Ю. Лермонтов',
            'date': `${new Date()}`
        },
    ]
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

export const generateDiary = (selectedTasksList) => {
    if (selectedTasksList.length) {
        console.log('Selected tasks is: ', selectedTasksList)
        console.log('Sending a request to a diary generator...')
        // request
    }
}

export const generateButtonHandler = (tasksList) => {
    generateDiary(getSelectedTasks(tasksList))
}

// export const selectTask = (item) => {
//
// }
