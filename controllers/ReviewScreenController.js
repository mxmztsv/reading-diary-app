import {request} from "./HttpController";

export const submit = async (readingTaskId, characters, plot, review) => {
    console.log('readingTaskId', readingTaskId)
    await request('/student/save-report', {readingTaskId, characters, plot, review})
}
