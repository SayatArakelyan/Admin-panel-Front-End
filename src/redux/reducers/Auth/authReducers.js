import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    USER_LOADING,
} from './authActions';


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case REGISTER_SUCCESS:
            return state
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: {
                    name: action.payload.name
                }
            };
        case REGISTER_FAIL:
            return state
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
