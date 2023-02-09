const FAVORITE_CAR_LIST = 'FAVORITE_CAR_LIST';
const ADD_FAVORITE_CAR = 'ADD_FAVORITE_CAR';
const initialState = [];

const favoriteCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_CAR_LIST:
      return {
        ...state,
        favoriteCarList: action.payload,
      };
    case ADD_FAVORITE_CAR:
      return {
        ...state,
        favoriteCarList: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteCarReducer;
