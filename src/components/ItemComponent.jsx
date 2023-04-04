import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleDelete } from '../redux/cars/reducer';

const ItemComponent = ({ carList, title }) => {
  const dispatch = useDispatch();
  return (
    <div className="px-[2.5rem] sm:px-[3.5rem] md:px-[60px] md:py-[0px] h-screen transform transition-all ">
      <h2 className="text-center font-semibold text-red-700">{title}</h2>
      <div className="flex items-center justify-center">
        <div className="">
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-white p-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {carList.map((car) => (
              <div className="group relative overflow-hidden rounded-xl shadow-xl" key={car.id}>
                <div className="h-full w-full group-hover:scale-125 transform transition-all duration-300">
                  <img src={`${car.image}`} className="h-full w-full bg-rose-50/[30] opacity-80" alt={car.model} />
                  <div className="h-full w-full absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-black p-2  text-center tracking-widest uppercase" style={{ color: 'white', textShadow: '#000 0px 0px 4px, #000 0px 0px 11px, #000 0px 0px 19px, #000 0px 0px 40px, #000 0px 0px 0px, #000 0px 0px 0px, #000 0px 0px 0px, #000 0px 0px 0px' }}>
                    <h1 className="xxs:text-[11px] xs:text-[15px] xxs:leading-3 xs:leading-4 sm:text-xl md:text-base lg:text-lg xl:text-2xl">{car.model}</h1>
                    <h2 className="xxs:text-[9px] xs:text-[12px] xxs:leading-3 xs:leading-4 sm:text-lg md:text-sm lg:text-base xl:text-xl">{car.price}</h2>
                    <h2 className="xxs:text-[7px] xs:text-[10px] xxs:leading-3 xs:leading-4 sm:text-base md:text-xs lg:text-sm xl:text-base">{car.color}</h2>
                    {title === 'Cars' ? (
                      <div className="mt-8 ">
                        <Link to={`/details/${car.id}`} className="bg-gray-900 opacity-100 py-2 px-4 rounded-md text-[7px]">Read More</Link>
                      </div>
                    )
                      : null}
                    {title === 'Pick the car you want to delete' ? (
                      <div className="mt-8 ">
                        <button type="button" onClick={() => dispatch(handleDelete(car.id))} className="bg-gray-900 opacity-100 py-2 px-4 rounded-md text-[7px]">Delete Car</button>
                      </div>
                    )
                      : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
