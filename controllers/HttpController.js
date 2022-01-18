import {BASE_URL} from "../config/API";

export const request = async (url, body = null, method = 'POST', headers = {
    'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36'
}) => {
    try {

        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        // const proxyurl = "https://rh-cors.herokuapp.com/"

        const response = await fetch(BASE_URL + url, { method, body, headers })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong during http request')
        }

        return data
    } catch (e) {
        throw e
    }
}
