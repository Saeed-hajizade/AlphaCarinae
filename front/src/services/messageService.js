import Http from "./Http"
import { AppConfig } from './Config.json'

export const uploadVoiceService = data => {
    return Http.post(`${AppConfig}/uploadVoice`, data)
}

export const uploadFileService=data=> {
    return Http.post(`${AppConfig}/uploadFile`,data)
}