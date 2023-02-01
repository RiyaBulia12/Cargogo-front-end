import React from "react";

const ItemComponent = ({ carList }) => {
  console.log("Hii", carList);
  return (
    <div className="w-1/2 bg-white rounded-lg shadow">
      {carList.map((car) => {
        return (
          <ul key={car.id} className="flex">
              <li className="p-3">{car.model}</li>
              <li className="p-3"><img src={`${car.image}`}/> </li>
              <li className="p-3">{car.color}</li>
              <li className="p-3">{car.description}</li>
              <li className="p-3">{car.price}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ItemComponent;
