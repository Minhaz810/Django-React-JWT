import {Navigate,Outlet} from "react-router-dom";
import { useState } from "react";

const PrivateRoute = () =>{
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    return(
        isAuthenticated ? <Outlet/> : <Navigate to ="/login"/>
    )
}

export default PrivateRoute