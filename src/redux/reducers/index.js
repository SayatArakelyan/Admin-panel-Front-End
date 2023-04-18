import {combineReducers} from "redux";
import ProductsReducer from './products/reducer'
import CustomersReducer from "./customers/reducers"
import AuthReducers from "./Auth/authReducers";
import errorReducer from "./Auth/errorReducers";


const rootReducers = () => combineReducers({
    products: ProductsReducer,
    customers: CustomersReducer,
    auth: AuthReducers,
    error: errorReducer
})

export default rootReducers