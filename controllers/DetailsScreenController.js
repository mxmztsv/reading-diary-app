import {request} from "./HttpController";

export const getStatisticsById = async (id) => {
    // request

    const statistics = await request('/main/reading-sessions', {id})

    // const statistics = [
    //     {
    //         'id': '654',
    //         'date': '23.01.2022',
    //         'startTime': '12:17',
    //         'endTime': '12:47',
    //         'duration': '30 мин'
    //     },
    //     {
    //         'id': '321',
    //         'date': '23.01.2022',
    //         'startTime': '12:17',
    //         'endTime': '12:47',
    //         'duration': '30 мин'
    //     },
    //     {
    //         'id': '1',
    //         'date': '23.01.2022',
    //         'startTime': '12:17',
    //         'endTime': '12:47',
    //         'duration': '30 мин'
    //     },
    //     {
    //         'id': '2',
    //         'date': '23.01.2022',
    //         'startTime': '12:17',
    //         'endTime': '12:47',
    //         'duration': '30 мин'
    //     },
    //     {
    //         'id': '3',
    //         'date': '23.01.2022',
    //         'startTime': '12:17',
    //         'endTime': '12:47',
    //         'duration': '30 мин'
    //     }
    // ]
    return statistics
}

export const getDetails = () => {
    // request
    const details = {

    }
}
