import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import baseUrl from '../redux/baseUrl';

function CarDetails() {

  const params = useParams();
  const url = `${baseUrl}/cars/${params.id}`
  const [data, setData] = useState([]) 

  useEffect(()=>{
    axios.get(url)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
  }, [url])

  
  return (
    <div>
      <h1>Car Details</h1>
      <img src={data.image}/>
      <h2>{data.model}</h2>
      <h2>{data.color}</h2>
      <h2>{data.price}</h2>
      <p>{data.description}</p>
      <button>Add to Favorite</button>
    </div>
  )
}

export default CarDetails
