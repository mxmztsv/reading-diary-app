import {request} from "./HttpController";
import {ToastAndroid} from "react-native";

export const submit = async (readingTaskId, characters, plot, review) => {
    console.log('readingTaskId', readingTaskId)
    try {
        await request('/student/save-report', {readingTaskId, characters, plot, review})
        ToastAndroid.show("Отчет сохранен", ToastAndroid.SHORT);
    } catch (e) {
        console.log(e.message)
        ToastAndroid.show("Что-то пошло не так...", ToastAndroid.SHORT);
    }
}
