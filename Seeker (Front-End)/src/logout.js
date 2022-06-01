import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Logout() {

    let navigate = useNavigate();
useEffect(() => {
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
    }
        navigate("/", { replace: false });
        navigate(0);
    
});

    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}


export default Logout;
