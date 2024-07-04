import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
    id: string,
    email: string,
    accessToken: string,
}

const initialState: AuthState = {
    id: '',
    email: '',
    accessToken: '',
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        authData: initialState
    },
    reducers: {
        addAuth: (state, action) => {
            state.authData = action.payload;
        },
        deleteAuth:(state, action) => {
            state.authData = initialState;
        }
    }
});

export const authReducer = authSlice.reducer;
export const { addAuth, deleteAuth} = authSlice.actions;
export const authSelector = (state: any) => state.authReducer.authData;