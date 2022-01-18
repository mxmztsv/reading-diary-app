import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";

export const commitReadingSession = async (taskId, date, startTime, endTime) => {

    console.log('taskId', taskId)
    console.log('date', date)
    console.log('startTime', startTime)
    console.log('endTime', endTime)

    const userInfo = await getUserInfo()
    console.log('studentId', userInfo.id)


    await request('/student/save-session', {
        studentId: userInfo.id,
        readingTaskId: taskId,
        date,
        readingStart: startTime,
        readingEnd: endTime
    })
}

export const getCurrentTime = () => {
    const currentDate = new Date();
    const time = currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":" + currentDate.getSeconds()
    console.log('time', time)
    return time
}
