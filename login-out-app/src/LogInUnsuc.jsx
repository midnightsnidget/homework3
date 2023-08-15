import React from "react";
import { useNavigate } from "react-router-dom";

function LogInUnsuc() {
    const navigate = useNavigate();

    const handleGoToLogin = () =>{
        navigate('/');
     };

    return (
        <div>
            <h2> Login unsuccessful </h2>
            <p> Your username or password may be incorrect</p>
            <p> Click here to return to the login page:</p>
            <button onClick={handleGoToLogin}>
               Return to login page
            </button>
        </div>
    );
}

export default LogInUnsuc;