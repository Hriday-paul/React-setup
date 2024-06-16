import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { adminStateType } from "./Type";

const initialState: adminStateType = {
    uId: '',
    name: '',
    email: '',
    photo: '',
    isAuthonicated: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: (state, { payload }: PayloadAction<adminStateType>) => {
            state.uId = payload.uId;
            state.name = payload.name;
            state.email = payload.email;
            state.photo = payload.photo;
            state.isAuthonicated = true;
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.error = '';
        },
    }
});

export default userSlice.reducer;