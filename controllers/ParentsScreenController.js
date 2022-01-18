import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";


export const getParents = async () => {
    // request

    const userInfo = await getUserInfo()
    const id = userInfo.id

    const parents = await request('/student/parents', {id})

    console.log('parents', parents)

    // const parents = [
    //     {
    //         'name': 'Олег Зайцев',
    //         'id': '284701'
    //     },
    //     {
    //         'name': 'Гульнара Галеева',
    //         'id': '324578'
    //     },
    // ]
    return parents
}
