import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import {getCarList} from "../redux/cars/reducer";

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
      <div className="cleaners_sect">
        <div>
          <p className="page_title">
            <span className="available_docs">Cars</span>
            <span className="select">Please select your cars</span>
          </p>
        </div>
  
        {cars.hasErrors && (
          <div className="error">
            Unable to display cars . Please check your server.
          </div>
        )}
  
        {!cars.loading && !cars.hasErrors && (
          <div className="content_div">
            <div className="arrow_div">
              <button type="button" className="arrow left" onClick={scrollLeft}>
                <BiLeftArrow className="left_arrow" />
              </button>
            </div>
            <div className="cover_div">
              <div className="scroll_content">
                {cars.map((car) => (
                  <div key={car.id} className="cleaners_div">
                    <Link to={`/cleaners/${car.id}`}>
                      <img
                        className="cleaners_img"
                        src={car.image}
                        alt={car.name}
                      />
                    </Link>
                    <h2 className="cleaners_name">{car.model}</h2>
                    <p className="specialization">
                      cost of car :
                      {car.price}
                      dollars
                    </p>
                    <p className="specialization">
                      car color :
                      {car.color}
                    </p>

                    <p className="specialization">
                     description :
                      {car.description}
                    </p>

                    <p className="specialization">
                     production_date :
                      {car.production_date}
                    </p>
                    
                    <p className="specialization">
                      brand :
                      {car.brand}
                    </p>

                  </div>
                ))}
              </div>
            </div>
            <div>
              <button type="button" className="arrow right" onClick={scrollRight}>
                <BiRightArrow />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default CarList;
