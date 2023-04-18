import axios from 'axios';
import {AUTH_TOKEN} from "../constants";


export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch(`http://localhost:4444/api/products`).then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("http://localhost:4444/api/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};


export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};


axios.interceptors.request.use(config => ({
  ...config,
  header: {
    ...config.headers,
    'Content-Type': 'application/json',
    "x-auth-token": localStorage.getItem(AUTH_TOKEN),
  }
}))

export {axios}
