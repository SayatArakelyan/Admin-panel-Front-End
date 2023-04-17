import {getInventory} from "../../../API";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const requestProducts = () => ({
    type: GET_PRODUCTS,
    payload: [],
});

export const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
});

export const getProductsError = () => ({
    type: GET_PRODUCTS_FAILURE,
    payload: [],
});

export function fetchProducts() {
    return (dispatch) => {
        dispatch(requestProducts());

        getInventory().then((products) => {
            dispatch(getProductsSuccess(products))
        }).catch((err) => {
            dispatch(getProductsError())
        });
    };
}