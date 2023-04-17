import {combineReducers} from "redux";
import ProductsReducer from './products/reducer'
import CustomersReducer from "./customers/reducers"


const rootReducers = () => combineReducers({
    products: ProductsReducer,
    customers: CustomersReducer
})

export default rootReducers