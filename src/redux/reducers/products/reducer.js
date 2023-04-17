import {GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS} from "./actions";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, loading: true, data: []};
        case GET_PRODUCTS_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case GET_PRODUCTS_FAILURE:
            return {...state, loading: false, data: []};
        default:
            return state;
    }
};
export default reducer;