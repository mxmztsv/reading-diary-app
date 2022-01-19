import {getUserInfo} from "./AuthController";
import {request} from "./HttpController";
import {BASE_URL} from "../config/API";
import {copyFile, DocumentDirectoryPath, downloadFile} from "react-native-fs";
import ReactNativeBlobUtil from 'react-native-blob-util'
import axios from "axios";
import RNFetchBlob from "rn-fetch-blob";
import binaryToBase64 from "react-native/Libraries/Utilities/binaryToBase64";


export const getDiariesList = async () => {
    const userInfo = await getUserInfo()
    const id = userInfo.id

    const diariesList = await request('/main/diaries', {id})

    console.log('diariesList', diariesList)

    return diariesList
}

export const getDiaryById = async (id, filename) => {

    const { fs } = RNFetchBlob;

    let dirs = ReactNativeBlobUtil.fs.dirs

    const body = JSON.stringify({id})
    const headers = {}
    headers['Content-Type'] = 'application/json'
    const method = 'POST'

    const options = {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
        }
    }
    const response = await axios.post(BASE_URL + '/main/diary', body, options)

    const base64 = binaryToBase64(response.data)

    // const filePath = `${fs.dirs.CacheDir}/${filename}.pdf`;
    //
    // const path = await RNFetchBlob.fs.createFile(filePath, base64, "base64")
    //
    // console.log('path', path)
    // RNFetchBlob.session("all").add(path);
    return base64
    // return response.data
    // return path

        // .then((response) => {
        //     const base64 = binaryToBase64(response.data)
        //
        //     const filePath = `${fs.dirs.CacheDir}/${filename}.pdf`;
        //
        //     RNFetchBlob.fs.createFile(filePath, base64, "base64").then(path => {
        //         // necessary ?
        //         console.log('path', path)
        //         RNFetchBlob.session("all").add(path);
        //         return path
        //         // copyFile(path, '/Download/reading_diaries')
        //     });
        // })
        // .catch((error) => console.log(error));


    // ReactNativeBlobUtil
    //     .config({
    //         // add this option that makes response data to be stored as a file,
    //         // this is much more performant.
    //         fileCache : true,
    //         appendExt : 'pdf',
    //         path : dirs.DocumentDir + '/READING_DIARY'
    //     })
    //     .fetch(method, BASE_URL + '/main/diary', {
    //         //some headers ..
    //     }, body)
    //     .then((res) => {
    //         // the temp file path
    //         console.log('The file saved to ', res.path())
    //     })

    // const response = await fetch(BASE_URL + '/main/diary', { method, body, headers })
    // response.download()
    // const response = await fetch(BASE_URL + '/main/diary', { method, headers })
    // console.log('response', response)

}

// export const downloadPDF = async (url, fileName) =>{
// //Define path to store file along with the extension
//     const path = `${DocumentDirectoryPath}/${fileName}.pdf`;
//     const headers = {
//         'Accept': 'application/pdf',
//         'Content-Type': 'application/pdf',
//         'Authorization': `Bearer [token]`
//     }
//
// //Define options
//     const options = {
//         fromUrl: [BASE_URL] + url,
//         toFile: path,
//         headers: headers
//     }
// //Call downloadFile
//     const res =  await downloadFile(options);
//
//     if (res && res.statusCode === 200 && res.bytesWritten > 0 && res.path) {
//         //doSomething(res)
//         console.log('Downloading...')
//     } else {
//         //logError(res)
//     }
//
//     // return response.promise.then(async (res) => {
//     //     //Transform response
//     //     if (res && res.statusCode === 200 && res.bytesWritten > 0 && res.path) {
//     //         //doSomething(res)
//     //     } else {
//     //         //logError(res)
//     //     }
//     // }
// }
