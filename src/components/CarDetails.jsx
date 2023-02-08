import {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import baseUrl from '../redux/baseUrl';
import {addToFavorite} from '../redux/favorite/api';

function CarDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const url = `${baseUrl}/cars/${params.id}`
  const [data, setData] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  useEffect(()=>{
    axios.get(url)
      .then(response => {
        setData(response.data)
      })
  }, [url])

  const handleAddToFavorite = () => {
    const response = dispatch(addToFavorite(data.id));
    response.then((res) => {
      if (res.error) {
        setError(res.error);
      } else {
        setMessage("Added to favorite successfully");
      }
    }
    );
  }

  return (
    <div>
      <h1>Car Details</h1>
      <img src={data.image}/>
      <h2>{data.model}</h2>
      <h2>{data.color}</h2>
      <h2>{data.price}</h2>
      <p>{data.description}</p>
      <button onClick={handleAddToFavorite}  >Add to Favorite</button>
      {message && (
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                  <p class="font-bold">Information</p>
                  <p class="text-sm">{message}</p>
                </div>
              </div>
            </div>)
          }
          {error && (
            <div role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>{error}</p>
              </div>
            </div>
          )}
    </div>
    );
}

export default CarDetails
