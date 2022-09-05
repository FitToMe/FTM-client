import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../_features/userSlice';
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import {useDispatch, useSelector} from "react-redux";

//reducer 여러개 합치기
const reducers = combineReducers({
    user: userReducer,
})

const persistConfig = {
    key: "root",  //reducer의 어느 지점에서부터 데이터를 저장할 것인지 지정
    storage,  //localStorage에 저장
    whitelist: [userReducer],  //userReducer 저장
    //blacklist -> 이거만 제외하고 저장하기 가능
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});
