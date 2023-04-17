import {getCustomers} from "../../../API";

export const GET_Customers = 'GET_Customers';
export const GET_Customers_SUCCESS = 'GET_Customers_SUCCESS';
export const GET_Customers_FAILURE = 'Customers_FAILURE';

export const requestCustomers = () => ({
    type: GET_Customers,
    payload: [],
});

export const getCustomersSuccess = (products) => ({
    type: GET_Customers_SUCCESS,
    payload: products,
});

export const getCustomersError = () => ({
    type: GET_Customers_FAILURE,
    payload: [],
});

export function fetchCustomers() {
    return (dispatch) => {
        dispatch(requestCustomers());

        getCustomers().then((products) => {
            dispatch(getCustomersSuccess(products))
        }).catch((err) => {
            dispatch(getCustomersError())
        });
    };
}