const baseUrl = 'https://cargogo-backend-production.up.railway.app/api/v1/';

const localUrl = 'http://127.0.0.1:3000/api/v1/';

const getFavoriteList = (userId) => async(dispatch) => {
  const favoriteResponse = await fetch(`${localUrl}users/1/favorites`);
  const favoriteData = await favoriteResponse.json();

  const carPromise = favoriteData.map(async(cars) => {
    const carResponse = await fetch(`${localUrl}cars/${cars.id}`);
    return carResponse.json();
  });

  const carData = await Promise.all(carPromise);

  dispatch({ type: 'FAVORITE_CAR_LIST', payload: carData })
  dispatch({ type: 'FAVORITE_LIST', payload: favoriteData })
}

export default getFavoriteList;
