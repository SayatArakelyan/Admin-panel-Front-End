import {GET_MESSAGES, GET_MESSAGES_FAILURE, GET_MESSAGES_SUCCESS} from "./actions";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {...state, loading: true, data: []};
        case GET_MESSAGES_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case GET_MESSAGES_FAILURE:
            return {...state, loading: false, data: []};


        default:
            return state;
    }
};
export default reducer;