import { createAsyncThunk } from "@reduxjs/toolkit";
// const baseUrl = 'https://cargogo-backend-production.up.railway.app/api/v1/';
const GET_CAR_LIST = 'GET_CAR_LIST';
const initialState = [];

export const getCarList = createAsyncThunk( GET_CAR_LIST, async () => {
  const carResponse = await fetch(`https://cargogo-backend-production.up.railway.app/api/v1/cars`);
  const carData = await carResponse.json();
    console.log(carData)  
  return carData;
});

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ` ${GET_CAR_LIST}/fulfilled`:  
      return action.payload
    default:
      return state;
  }
};



export default carReducer;