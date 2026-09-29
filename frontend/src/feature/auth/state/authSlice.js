import {createSlice} from '@reduxjs/toolkit'
import { LoginUserAction, RegisteruserAction } from './authAction'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isLoading: false,
        isHydrated: true
    },
    extraReducers: (builder)=>{
        builder
            .addCase(LoginUserAction.pending, (state)=>{
                state.isLoading = true,
                state.isHydrated = false
            })
            .addCase(LoginUserAction.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isHydrated = true
                state.currentUser = action.payload.data.user
            })
            .addCase(LoginUserAction.rejected, (state)=>{
                state.isLoading = false,
                state.isHydrated = false
            })
            .addCase(RegisteruserAction.pending, (state)=>{
                state.isLoading = true,
                state.isHydrated = false
            })
            .addCase(RegisteruserAction.fulfilled, (state,action)=>{
                state.isLoading = false,
                state.isHydrated = true,
                state.currentUser = action.payload
            })
            .addCase(RegisteruserAction.rejected, (state)=>{
                state.isLoading = false
                state.isHydrated = false
            })
    }
})

export default authSlice.reducer