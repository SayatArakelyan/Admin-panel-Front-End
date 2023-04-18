import {returnErrors} from './errorActions';
import {axios} from "../../../API";
import {AUTH_TOKEN} from "../../../constants";


export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const USER_LOADING = 'USER_LOADING';

export const initUser = () => (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            name: 'Test'
        },
    });
}

export const signIn = ({username, password}) => (dispatch) => {
    dispatch({type: USER_LOADING});

    return axios
        .post('http://localhost:4444/api/auth/login', {username, password})
        .then((res) => {
            const token = res.data.jwt;

            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    name: 'Test'
                },
            });
            localStorage.setItem(AUTH_TOKEN, JSON.stringify(token))
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};


export const signOut = () => (dispatch) => {
    dispatch({type: USER_LOADING});

    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(() => {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
            localStorage.removeItem(AUTH_TOKEN)
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};






