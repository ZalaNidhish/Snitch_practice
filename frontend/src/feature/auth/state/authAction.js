import {createAsyncThunk} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import {api} from '../../../config/api'
 
export const LoginUserAction = createAsyncThunk('auth/login', async(data, thunkApi) => {
    try{
        const response = await api.post('/auth/login', data)
        localStorage.setItem("accessToken", response.data.data.accessToken);
        console.log(response.data);
        toast(response.data.message)
        return response.data
    }catch(err){
        console.log(err.response.data);
        toast.error(err.response.data.message)
        return thunkApi.rejectWithValue("Error in login")
    }
})

export const RegisteruserAction = createAsyncThunk('auth/register', async(data, thunkApi) => {
    try{

        const response = await api.post('/auth/register', data)
        localStorage.setItem("accessToken", response.data.data.accessToken)
        toast(response.data.message)
        console.log(response.data);
        return response.data.data.user
    }catch(err){
        console.log(err.response.data);
        toast.error(err.response.data.message)
        return thunkApi.rejectWithValue("Error in Registration")
    }
})
