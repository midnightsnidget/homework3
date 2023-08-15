import React from "react";
import { useHistory } from "react-router-dom";

function LogInUnsuc() {
    const history = useHistory();

    const handleGoToLogin = () =>{
        history.push('/');
     };

    return (
        <div>
            <h2> Login unsuccessful </h2>
            <p> Your username or password may be incorrect</p>
            <p> Click here to return to the login page:</p>
            {/* <button onClick={handleLogout}>
               Return to login page */}
            </button>

        </div>
    );
}

export default Login;