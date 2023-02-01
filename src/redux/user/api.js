import baseUrl from '../baseUrl';
import axios from 'axios';

const postUser = async (user) =>{
  return await axios.post(`${baseUrl}users`, user)
}

export default postUser;