import {Route, Routes} from "react-router-dom";
import Customers from "../../../../admin-panel/src/Pages/Customers";
import Dashboard from "../../../../admin-panel/src/Pages/Dashbaord";
import Inventory from "../../../../admin-panel/src/Pages/Inventory";
import Orders from "../../../../admin-panel/src/Pages/Orders";
import Posts from "../../Pages/Posts";
import Login from "../../Pages/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {AUTH_TOKEN} from "../../constants";
import {initUser} from "../../redux/reducers/Auth/authActions";
import {useDispatch} from "react-redux";

function AppRoutes() {
    const user = localStorage.getItem(AUTH_TOKEN);
    const dispatch = useDispatch();

    if (user) {
        dispatch(initUser());
    }

    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/orders" element={<ProtectedRoute user={user}><Orders/></ProtectedRoute>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default AppRoutes;
