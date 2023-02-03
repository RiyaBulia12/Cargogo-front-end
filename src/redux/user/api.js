import baseUrl from '../baseUrl';
import axios from 'axios';

export const postUser = async (user) =>{
  return await axios.post(`${baseUrl}users`, user)
}

export const getUser = async(userlogin) => {
    return await axios.post(`${baseUrl}userlogin`, userlogin)
}