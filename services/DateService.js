export const stringToDate = (dateString) => {
    let date = Date.parse(dateString)
    date = new Date(date)

    date = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
    return date
}

export const stringToDateWithTime = (dateString) => {
    let date = Date.parse(dateString)
    date = new Date(date)

    date = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return date
}
