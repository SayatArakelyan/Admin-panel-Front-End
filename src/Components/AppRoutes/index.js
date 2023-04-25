import {Route, Routes} from "react-router-dom";
import Customers from "../../../../admin-panel/src/Pages/Customers";
import Inventory from "../../../../admin-panel/src/Pages/Inventory";
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

            <Route path="/" element={<ProtectedRoute user={user}><Inventory/></ProtectedRoute>}/>
            <Route path="/customers" element={<ProtectedRoute user={user}><Customers/></ProtectedRoute> }/>
            <Route path="/posts" element={<ProtectedRoute user={user}><Posts/></ProtectedRoute>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default AppRoutes;
