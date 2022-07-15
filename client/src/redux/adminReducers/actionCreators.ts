import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface IAdminPanel {
    tab: string;
}

export const selectTab = createAsyncThunk(
    'auth/login',
    async (tab: string, thunkAPI) => {
        try {
            const response = tab;
            return response;
        } catch (e: any) {
            return thunkAPI.rejectWithValue("Error")
        }
    }
)

