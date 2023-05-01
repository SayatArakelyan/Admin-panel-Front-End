import {getInventory, createInventory,deleteInventory,updateInventory} from "../../../API";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const CREATE_PRODUCTS = 'CREATE_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

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


export const requestCreateProducts = (products) => ({
    type: CREATE_PRODUCTS,
    payload: products,
});


export function fetchProducts() {
    return (dispatch) => {
        dispatch(requestProducts());

        getInventory().then(({data: products}) => {
            dispatch(getProductsSuccess(products))
        }).catch((err) => {
            dispatch(getProductsError())
        });
    };
}

export const addProduct = ({name, price, description, category_id, image}) => {
    return (dispatch) => {
        return createInventory({name, price, description, category_id, image})
            .then(({data}) => {

            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export const deleteProduct = ({ id }) => {
    return (dispatch) => {
        return deleteInventory({ id })
            .then(({ data }) => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: id
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
export const updateProduct = ({ id }) => {
    return (dispatch) => {
        return updateInventory({ id })
            .then(({ data }) => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: id
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

