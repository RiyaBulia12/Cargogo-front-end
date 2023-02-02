const baseUrl = 'https://cargogo-backend-production.up.railway.app/api/v1/';

const getFavoriteList = () => async (dispatch) => {
  const favoriteResponse = await fetch(`${baseUrl}users/1/favorites`);
  const favoriteData = await favoriteResponse.json();

  const carPromise = favoriteData.map(async (cars) => {
    const carResponse = await fetch(`${baseUrl}cars/${cars.id}`);
    return carResponse.json();
  });

  const carData = await Promise.all(carPromise);

  dispatch({ type: 'FAVORITE_CAR_LIST', payload: carData });
  dispatch({ type: 'FAVORITE_LIST', payload: favoriteData });
};

export default getFavoriteList;
