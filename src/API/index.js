import axios from 'axios';
import {AUTH_TOKEN} from "../constants";
import {API_URL} from "../constants/api";


axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => ({
    ...config,
    headers: {
        ...config.headers,
        "Authorization": JSON.parse(localStorage.getItem(AUTH_TOKEN)),

    },
}))

export const getInventory = () => {
    return axios.get(`${API_URL}/products`);
};

export const createInventory = ({name = '', price = 0, description = '', category_id = 0, image = null}) => {
    const fd = new FormData();

    fd.append('name', name);
    fd.append('price', price.toString());
    fd.append('description', description);
    fd.append('category_id', category_id.toString());
    fd.append('image', image);

    return axios.post(`${API_URL}/products`, fd, {headers: {'Content-Type': 'multipart/form-data'}});
};


export const deleteInventory = ({id}) => {
    return axios.delete(`${API_URL}/products/${id}`, {
        headers: {

            "Authorization": JSON.parse(localStorage.getItem(AUTH_TOKEN)),

        }
    })


}
export const updateInventory = ({id}) => {
    return axios.put(`${API_URL}/products/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem(AUTH_TOKEN)),

        }
    })


}

export const getMessages = () => {
    return axios.get(`http://localhost:4444/api/sendEmail`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": JSON.parse(localStorage.getItem(AUTH_TOKEN)),        },
    });
};



export const getCustomers = () => {
    return fetch("http://localhost:4444/api/users").then((res) => res.json());
};


export {axios}
