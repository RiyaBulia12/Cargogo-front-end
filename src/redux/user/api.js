import axios from 'axios';
import baseUrl from '../baseUrl';

export const postUser = async (user) => {
  return await axios.post(`${baseUrl}users`, user);
};

export const getUser = async (userlogin) => {
    return await axios.post(`${baseUrl}users/login`, userlogin);
};
