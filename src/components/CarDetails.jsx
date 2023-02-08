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
  );
}

export default CarDetails;
