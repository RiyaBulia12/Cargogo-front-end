import { createAsyncThunk } from "@reduxjs/toolkit";
// const baseUrl = 'https://cargogo-backend-production.up.railway.app/api/v1/';
const GET_CAR_LIST = 'GET_CAR_LIST';
const initialState = [];

export const getCarList = () => async (dispatch) =>{
  const carResponse = await fetch(`https://cargogo-backend-production.up.railway.app/api/v1/cars`);
  const carData = await carResponse.json();
    console.log(carData)  
    dispatch({ type: 'GET_CAR_LIST', payload: carData });

};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_LIST:  
      return action.payload
    default:
      return state;
  }
};



export default carReducer;