import {createSlice} from '@reduxjs/toolkit';
import {PURGE} from "redux-persist/es/constants";

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
    //reducer에 purge를 추가해 reducer의 store값을 initialState로 초기화
    extraReducers: builder => {
        builder.addCase(PURGE,()=>initialState);
    },
});

//actions
//dispatch로 액션을 전달해 상태를 어떻게 변화시킬지 결정한다.
export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;