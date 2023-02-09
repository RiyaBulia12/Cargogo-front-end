import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcar } from '../redux/cars/reducer';
import './addcar.css';

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
    image: '',
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
      image: car.image,
      description: car.description,
      production_date: car.production_date

    };
    addCar(caritem);
    setCar({
      brand: '',
      model: '',
      price: '',
      color: '',
      image: '',
      description: ' ',
      production_date: ''
    });
  };
  return (
    <form onSubmit={handleChange} className="add-form">
      <h2 className='p-8'> ADD A CAR </h2>
      <input
        type="text"
        required
        placeholder="Brand"
        value={car.brand}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, brand: e.target.value })}
      />
      <input
        type="text"
        required
        placeholder="model"
        value={car.model}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      <input
        type="integer"
        required
        placeholder="the cost of the car"
        value={car.price}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="color"
        required
        value={car.color}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, color: e.target.value })}
      />
      <input
        type="text"
        required
        placeholder="image"
        value={car.image}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, image: e.target.value })}
      />
        <input
        type="text"
        required
        placeholder="description"
        value={car.description}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, description: e.target.value })}
      />

      <input
        type="text"
        required
        placeholder="production_date"
        value={car.production_date}
        className="rounded-full p-4"
        onChange={(e) => setCar({ ...car, production_date: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Addcar;
