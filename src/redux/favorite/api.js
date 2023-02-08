import baseUrl from '../baseUrl';

const getFavoriteList = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const favoriteResponse = await fetch(`${baseUrl}users/${user.id}/favorites`);
  const favoriteData = await favoriteResponse.json();

  const carPromise = favoriteData.map(async (favorites) => {
    const carResponse = await fetch(`${baseUrl}cars/${favorites.car_id}`);
    return carResponse.json();
  });

  const carData = await Promise.all(carPromise);

  dispatch({ type: 'FAVORITE_CAR_LIST', payload: carData });
  dispatch({ type: 'FAVORITE_LIST', payload: favoriteData });
};

const addToFavorite = (carId) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const favoriteResponse = await fetch(`${baseUrl}users/${user.id}/favorites`,
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ car_id: carId, user_id: user.id })
    }
  );
  const favoriteData = await favoriteResponse.json();

  if (!favoriteData.error) {
    dispatch({ type: 'ADD_FAVORITE_CAR', payload: favoriteData });
  }
  return favoriteData;
};


export {getFavoriteList, addToFavorite};
