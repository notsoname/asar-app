import { IMessage } from '../../models/IMessage';
import { sendMessage, getMessages } from './actionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
    message: IMessage;
    messages: IMessage[];
    isLoading: Boolean;
    error: string;
}

const initialState: UsersState = {
    message: {} as IMessage,
    messages: [],
    isLoading: false,
    error: ""
}

export const Messages = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: {
        [sendMessage.fulfilled.type]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.error = ''
            state.messages = action.payload;
        },
        [sendMessage.pending.type]: (state) => {
            state.isLoading = true;
        },
        [sendMessage.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [getMessages.fulfilled.type]: (state, action: PayloadAction<IMessage[]>) => {
            state.isLoading = false;
            state.error = ''
            state.messages = action.payload;
        },
        [getMessages.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getMessages.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default Messages.reducer;