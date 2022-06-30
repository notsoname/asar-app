import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducers/AuthSlice";
import PostReducer from "./PostsReducer/PostsSlice";
import UsersRecuder from "./UsersReducers/UsersSlice";
import MessageReducer from "./MessageReducers/MessagesSlice";

const rootReducer = combineReducers( {
  AuthReducer,
  PostReducer,
  UsersRecuder,
  MessageReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];