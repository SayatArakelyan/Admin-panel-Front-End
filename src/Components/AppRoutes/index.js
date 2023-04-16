import {  Route, Routes } from "react-router-dom";
import Customers from "../../../../admin-panel/src/Pages/Customers";
import Dashboard from "../../../../admin-panel/src/Pages/Dashbaord";
import Inventory from "../../../../admin-panel/src/Pages/Inventory";
import Orders from "../../../../admin-panel/src/Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
