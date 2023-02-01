import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import getFavoriteList from "../redux/api";

const Favorite = () => {
  const dispatch = useDispatch();
  const favoriteCar = useSelector(state => state.favoriteCar);

  useEffect(() => {
    dispatch(getFavoriteList());
  }, [dispatch]);

  return(
  <div>
    <h2>This is Favorite</h2>
    {
      Array.isArray(favoriteCar.favoriteCarList) ?
      favoriteCar.favoriteCarList.map((car, index) => {
        return <div key={index}>{car.model}</div>
      }): null
    }
  </div>
  )
};

export default Favorite;
