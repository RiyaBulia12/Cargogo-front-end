import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../redux/baseUrl';

function CarDetails() {
  const params = useParams();
  const url = `${baseUrl}/cars/${params.id}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, [url]);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="object-fit w-[55rem] h-[38rem]" alt="img of car" src={data.image} />
      </div>
      <div className="md:hidden flex justify-center">
        <img className="object-fit w-[45rem] h-[28rem]" alt="img of car" src={data.image} />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">{data.color}</p>
          <h1
            className="lg:text-2xl text-xl font-bold lg:leading-6 leading-7 text-gray-800 mt-2 uppercase"
          >
            {data.model}
          </h1>
        </div>

        <button
          type="button"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-red-700 w-full py-4 hover:bg-gray-700"
        >
          Add to favorites
        </button>
        <div />
      </div>
    </div>
  );
}

export default CarDetails;
