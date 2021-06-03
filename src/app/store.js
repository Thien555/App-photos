import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../features/Photo/photoslice";
const rootReducer = combineReducers({
  photos: photoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
