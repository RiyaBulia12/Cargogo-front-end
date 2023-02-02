import React from "react";

const ItemComponent = ({ carList, title }) => {
  return (
    <div className="p-[2.5rem] sm:p-[3.5rem] md:p-[60px] bg-slate-50 h-screen transform transition-all ">
      <h1 className=" text-center text-black text-xl font-sans tracking-wider">{title}</h1>
      <div className="flex items-center justify-center">
        <div className="">
          <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-white p-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {carList.map(car => {
                return (
                  <div className="group relative overflow-hidden rounded-xl shadow-xl" key={car.id}>
                    <div className="h-full w-full group-hover:scale-125 transform transition-all duration-300">
                      <img src={`${car.image}`} className="h-full w-full bg-rose-50/[30] opacity-80" alt={car.model} />
                      <div className="h-full w-full absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-black p-2  text-center tracking-widest uppercase" style={{color: 'white', textShadow: "#000 0px 0px 4px, #000 0px 0px 11px, #000 0px 0px 19px, #000 0px 0px 40px, #000 0px 0px 0px, #000 0px 0px 0px, #000 0px 0px 0px, #000 0px 0px 0px"}}>
                        <h1 className="xxs:text-[11px] xs:text-[15px] xxs:leading-3 xs:leading-4 sm:text-xl md:text-base lg:text-lg xl:text-2xl">{car.model}</h1>
                        <h2 className="xxs:text-[9px] xs:text-[12px] xxs:leading-3 xs:leading-4 sm:text-lg md:text-sm lg:text-base xl:text-xl">{car.price}</h2>
                        <h2 className="xxs:text-[7px] xs:text-[10px] xxs:leading-3 xs:leading-4 sm:text-base md:text-xs lg:text-sm xl:text-base">{car.color}</h2>
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
