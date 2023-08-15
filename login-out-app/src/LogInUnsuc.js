import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LogInUnsuc() {
    const history = useHistory();

    const handleGoToLogin = () =>{
        

     };

    return (
        <div>
            <h2> Login unsuccessful </h2>
            <p> Click here to go back to login page:</p>
            {/* <button onClick={handleLogout}>
               Return to login page */}
            </button>

        </div>
    );
}

export default Login;