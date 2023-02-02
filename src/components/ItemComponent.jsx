import React from "react";

const ItemComponent = ({ carList }) => {
  return (
    <div className="p-[2.5rem] sm:p-[3.5rem] md:p-[60px] bg-slate-50 h-screen transform transition-all">
      <h1 className=" text-center text-black text-xl font-sans tracking-wider">Cars you loved the most</h1>
      <div className="flex items-center justify-center">
        <div className="">
          <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-white p-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {carList.map(car => {
                return (
                  <div className="group relative overflow-hidden rounded-xl" key={car.id}>
                    <div className="h-full w-full group-hover:scale-125 transform transition-all duration-300">
                      <img src={`${car.image}`} className="h-full w-full bg-rose-50/[30] opacity-80" alt={car.model} />
                      <div className="h-full w-full absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <h1 className="text-2xl tracking-widest text-center uppercase">{car.model}</h1>
                        <h2 className="text-xl text-center tracking-widest uppercase">{car.price}</h2>
                        <h2 className="text-xs text-center tracking-widest uppercase">{car.color}</h2>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
