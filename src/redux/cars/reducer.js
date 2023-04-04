import axios from 'axios';
import baseUrl from '../baseUrl';

const GET_CAR_LIST = 'GET_CAR_LIST';
const ADD_CAR = 'ADD_CAR';
const initialState = [];

export const getCarList = () => async (dispatch) => {
  const carResponse = await fetch(`${baseUrl}cars`);
  const carData = await carResponse.json();
  dispatch({ type: 'GET_CAR_LIST', payload: carData });
};

export const handleDelete = (itemId) => async (dispatch) => {
  const carResponse = await fetch(`${baseUrl}cars/${itemId}`, {
    method: 'DELETE',
  });
  dispatch(getCarList());
  return carResponse.json();
};

export const addcar = (car) => (dispatch) => {
  axios
    .post(baseUrl, car)
    .then((res) => {
      dispatch({
        type: ADD_CAR,
        payload: res.data,
      });
    })
    .catch((err) => err);
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_LIST:
      return action.payload;
    case ADD_CAR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carReducer;
