import baseUrl from '../baseUrl';

const GET_CAR_LIST = 'GET_CAR_LIST';
const initialState = [];

export const getCarList = () => async (dispatch) => {
  const carResponse = await fetch(`${baseUrl}cars`);
  const carData = await carResponse.json();
  dispatch({ type: 'GET_CAR_LIST', payload: carData });
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
