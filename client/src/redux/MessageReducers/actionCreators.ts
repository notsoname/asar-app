import { createAsyncThunk } from "@reduxjs/toolkit";
import MessageService from "../../services/messageService";

interface ICreateMessage {
    to: string,
    message: string
}

export const sendMessage = createAsyncThunk(
    'messages/send',
    async ({to, message}: ICreateMessage, thunkAPI) => {
        try {
            await MessageService.sendMessage(to, message);
            // const response = await MessageService.sendMessage(to, message);
            const response = await MessageService.getMessages(to);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

export const getMessages = createAsyncThunk(
    'messages/get',
    async (to: string, thunkAPI) => {
        try {
            const response = await MessageService.getMessages(to);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

