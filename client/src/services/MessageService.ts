import { AxiosResponse } from "axios";
import api from "../api";
import { IMessage } from "../models/IMessage";

export default class MessageService {
    static async sendMessage(to: string, message: string): Promise<AxiosResponse<IMessage[]>> {
        return api.post('/chat/sendmessage', {to, message})
    }

    static async getMessages(to: string): Promise<AxiosResponse<IMessage[]>> {
        return api.post('/chat/getMessages', {to})
    }
}