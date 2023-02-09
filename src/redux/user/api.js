import axios from 'axios';
import baseUrl from '../baseUrl';

export const postUser = async (user) => {
  const response = await axios.post(`${baseUrl}users`, user).then((response) => {
    localStorage.setItem('userInfo', JSON.stringify(response.data.data));
    return response;
  });
  return response.data;
  };

export const getUser = async (userlogin) => {
  const response = await axios.post(`${baseUrl}users/login`, userlogin).then((res) => {
    localStorage.setItem('userInfo', JSON.stringify(res.data.data));
    return res;
  });
  return response.data;
};
