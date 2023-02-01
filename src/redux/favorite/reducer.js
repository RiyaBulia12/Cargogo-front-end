const FAVORITE_CAR_LIST = 'FAVORITE_CAR_LIST';
const initialState = [];

const favoriteCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_CAR_LIST:
      return {
        ...state,
        favoriteCarList: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteCarReducer;
