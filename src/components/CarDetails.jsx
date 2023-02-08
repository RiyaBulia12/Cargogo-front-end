import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import baseUrl from '../redux/baseUrl';
import { addToFavorite } from '../redux/favorite/api';

function CarDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const url = `${baseUrl}/cars/${params.id}`;
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
      });
  }, [url]);

  const handleAddToFavorite = () => {
    const response = dispatch(addToFavorite(data.id));
    response.then((res) => {
      if (res.error) {
        setError(res.error);
      } else {
        setMessage('Added to favorite successfully');
      }
    });
  };

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
        <div>
          <h3 className="mt-2 font-semibold">About this listing</h3>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-3 mb-1">
            <span>Price: </span>
            $
            {data.price}
          </p>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mb-10">
            <span>Model: </span>
            {data.description}
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddToFavorite}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-red-700 w-full py-4 hover:bg-gray-700"
        >
          Add to favorites
        </button>
        {message && (
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
            <div>
              <p className="font-bold">Information</p>
              <p className="text-sm">{message}</p>
            </div>
          </div>
        </div>
        )}
        {error && (
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{error}</p>
          </div>
        </div>
        )}
        <div />
      </div>
    </div>
  );
}

export default CarDetails;
