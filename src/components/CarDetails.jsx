import React from 'react';
import { useParams } from "react-router-dom";
import baseUrl from '../redux/baseUrl';

function CarDetails({params}) {

  const params = useParams();
  const url = `${baseUrl}/cars/${params.id}`
  const [data, setData] = useState([]) 

  useEffect(()=>{
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data.data)
      })
  }, [url])

  
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails
