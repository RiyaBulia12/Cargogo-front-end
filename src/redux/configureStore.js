import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import favoriteCarReducer from './favorite/reducer';
import carReducer from './cars/reducer';

const store = configureStore({
  reducer: combineReducers({ favoriteCar: favoriteCarReducer , cars: carReducer}),
  middleware: [thunk],
});

export default store;
