import {GET_Customers, GET_Customers_SUCCESS,GET_Customers_FAILURE} from "./actions";


const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_Customers:
            return {...state, loading: true, data: []};
        case GET_Customers_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case GET_Customers_FAILURE:
            return {...state, loading: false, data: []};
        default:
            return state;
    }
};
export default reducer;