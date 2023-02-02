import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import getFavoriteList from "../redux/favorite/api";
import ItemComponent from "./ItemComponent";

const Favorite = () => {
  const dispatch = useDispatch();
  const favoriteCar = useSelector(state => state.favoriteCar);

  useEffect(() => {
    dispatch(getFavoriteList());
  }, [dispatch]);

  return(
  <div>
    {favoriteCar.favoriteCarList && favoriteCar.favoriteCarList.length > 0 ? (
        <ItemComponent carList={favoriteCar.favoriteCarList} title={"Cars you loved the most"}/>) : null
    }
  </div>
  )
};

export default Favorite;
