import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteCarReducer } from "./reducer";

const store = configureStore({
  reducer: combineReducers({ favoriteCar: favoriteCarReducer}),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;
