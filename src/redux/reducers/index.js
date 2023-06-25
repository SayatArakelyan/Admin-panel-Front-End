import {combineReducers} from "redux";
import ProductsReducer from './products/reducer'
import CustomersReducer from "./customers/reducers"
import AuthReducers from "./Auth/authReducers";
import errorReducer from "./Auth/errorReducers";
import MessagesReducer from "./messages/reducer"


const rootReducers = () => combineReducers({
    products: ProductsReducer,
    customers: CustomersReducer,
    messages: MessagesReducer,
    auth: AuthReducers,
    error: errorReducer
})

export default rootReducers