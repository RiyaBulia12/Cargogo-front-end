import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCarList} from "../redux/cars/reducer";
import ItemComponent from "./ItemComponent"

const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    useEffect(() => {
      dispatch(getCarList());
    }, [dispatch]);

    const scrollRight = () => {
      const container = document.querySelector('.scroll_content');
      container.scrollLeft += container.offsetWidth / 2;
      if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
        document.querySelector('.right').classList.add('disable');
      } else {
        document.querySelector('.right').classList.remove('disable');
      }
    };
    const scrollLeft = () => {
      const container = document.querySelector('.scroll_content');
      container.scrollLeft -= container.offsetWidth / 2;
      if (container.scrollLeft === 0) {
        document.querySelector('.left').classList.add('disable');
      } else {
        document.querySelector('.left').classList.remove('disable');
      }
    };

    return (
      <>
        {cars.hasErrors && (
          <div className="error">
            Unable to display cars . Please check your server.
          </div>
        )}


        {!cars.loading && !cars.hasErrors &&
          cars && cars.length > 0 ? (
          <ItemComponent carList={cars} title={"Cars List"}/>) : null}
    </>

    );
  };

export default CarList;
