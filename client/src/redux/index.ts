import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducers/AuthSlice";
import PostReducer from "./PostsReducer/PostsSlice";

const rootReducer = combineReducers( {
  AuthReducer,
  PostReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];