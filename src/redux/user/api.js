import axios from 'axios';
import baseUrl from '../baseUrl';

export const postUser = async (user) => {
  const response = await axios.post(`${baseUrl}users`, user).then((response) => response);
  return response.data;
};

export const getUser = async (userlogin) => {
  const response = await axios.post(`${baseUrl}users/login`, userlogin).then((res) => res);
  return response.data;
};
