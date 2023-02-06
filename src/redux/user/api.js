import axios from 'axios';
import baseUrl from '../baseUrl';

export const postUser = async (user) => (
  axios.post(`${baseUrl}users`, user)
);

export const getUser = async (userlogin) => (
     axios.post(`${baseUrl}users/login`, userlogin)
    );
