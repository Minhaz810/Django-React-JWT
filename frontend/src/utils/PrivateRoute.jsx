import {Navigate,Outlet} from "react-router-dom";
import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";


const PrivateRoute = () => {
    const token =localStorage.getItem("accessToken")
    return token ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoute