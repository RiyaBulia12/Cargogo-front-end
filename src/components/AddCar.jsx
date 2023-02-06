import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcar } from '../redux/cars/reducer';


const Addcar = () => {
  const dispatch = useDispatch();

  const addCar = (caritem) => {
    dispatch(addcar(caritem));
  };

  const [car, setCar] = useState({
    brand: '',
    model: '',
    price: '',
    color: '',
    photo: '',
    description: '',
    production_date: '',

  });

  const handleChange = (e) => {
    e.preventDefault();
    const caritem = {
      brand: car.brand,
      model: car.model,
      price: car.price,
      color: car.color,
      photo: car.photo,
      description: car.description,
      production_date: car.production_date

    };
    addCar(caritem);
    setCar({
      brand: '',
      model: '',
      price: '',
      color: '',
      photo: '',
      description: ' ',
      production_date: ''
    });
  };
  return (
    <form onSubmit={handleChange} className="add-form">
      <h2> add a new car.</h2>
      <input
        type="text"
        placeholder="Brand"
        value={car.brand}
        onChange={(e) => setCar({ ...car, brand: e.target.value })}
      />
      <input
        type="text"
        placeholder="model"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      <input
        type="integer"
        placeholder="the cost of the car"
        value={car.price}
        onChange={(e) => setCar({ ...car, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="color"
        value={car.color}
        onChange={(e) => setCar({ ...car, color: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo"
        value={car.photo}
        onChange={(e) => setCar({ ...car, photo: e.target.value })}
      />
        <input
        type="text"
        placeholder="description"
        value={car.description}
        onChange={(e) => setCar({ ...car, description: e.target.value })}
      />

      <input
        type="text"
        placeholder="production_date"
        value={car.production_date}
        onChange={(e) => setCar({ ...car, production_date: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Addcar;
