import baseUrl from '../baseUrl';
import axios from 'axios';

const postUser = async (user) =>{
  return await axios.post(`${baseUrl}users`, user)
}

const getUser = async() => {
    return await axios.get(`${baseUrl}userlogin`, userlogin)
}

export default postUser;