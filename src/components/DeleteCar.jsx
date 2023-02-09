import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarList } from '../redux/cars/reducer';
import ItemComponent from './ItemComponent';

const DeleteCarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);

  return (
    <>
      {cars.hasErrors && (
      <div className="error">
        Unable to display cars. Please check your server.
      </div>
      )}

      {!cars.loading && !cars.hasErrors
          && cars && cars.length > 0 ? (
            <ItemComponent carList={cars} title="Pick the car you want to delete" />) : null}
    </>

  );
};

export default DeleteCarList;
