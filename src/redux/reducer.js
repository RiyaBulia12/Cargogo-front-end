const FAVORITE_LIST = 'FAVORITE_LIST'
const FAVORITE_CAR_LIST = 'FAVORITE_CAR_LIST'
const initialState = []

// const favoriteReducer = (state = initialState, action) => {
//   switch(action.type){
//     case FAVORITE_LIST:
//       return {
//         ...state,
//         favoriteList: action.payload
//         };
//     default:
//       return state;
//   }
// }

const favoriteCarReducer = (state = initialState, action) => {
  switch(action.type){
    case FAVORITE_CAR_LIST:
      return {
        ...state,
        favoriteCarList: action.payload
      };
    default:
      return state;
  }
}

export {favoriteCarReducer};
