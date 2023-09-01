import React from "react";
import {Route,Routes} from 'react-router-dom'
// import HomePage from '../Pages/HomePage'
 import Login from '../Pages/Login'
// import About from '../Pages/About'
// import Test from "./Test";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SingleProdPage from "../Pages/SingleProdPage";
import EcomHomePage from "../Pages/EcomHomePage";
import Appointment from "./Appointment";
import SignUp from "../Pages/SignUp";
import Payment from "../Pages/Payment";
import CheckOut from "../Pages/CheckOut";
import OrderDetails from "../Pages/OrderDetails";

const AllRouters = ()=>{
    return(
        <Routes>
            <Route path="/" element={<EcomHomePage/>}></Route>
            <Route path="/appointment" element={<Appointment/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            {/* <Route path="/" element={<Home/>}></Route> */}
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:id" element={<SingleProdPage/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/checkout" element={<CheckOut/>}></Route>
            <Route path='/order' element={<OrderDetails/>}></Route>
        </Routes>
    )
}

export default AllRouters;