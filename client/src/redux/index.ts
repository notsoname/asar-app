import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authReducers/authSlice";
import PostReducer from "./postsReducer/postsSlice";
import UsersRecuder from "./usersReducers/usersSlice";
import MessageReducer from "./messageReducers/messagesSlice";
import AdminPanelReducer from "./adminReducers/adminSlice";

const rootReducer = combineReducers( {
  AuthReducer,
  PostReducer,
  UsersRecuder,
  MessageReducer,
  AdminPanelReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];