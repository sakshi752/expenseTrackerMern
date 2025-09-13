import persistReducer from "redux-persist/es/persistReducer"
import rootReducer from "./CombinedReducers"
import { createStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key: "root",
    storage,
    whitelist: ["auth"]
}

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducers);
export const persistor = persistStore(store)
