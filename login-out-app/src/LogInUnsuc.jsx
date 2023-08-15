import React from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";

function LogInUnsuc() {
    const navigate = useNavigate();

    const handleGoToLogin = () =>{
        navigate('/');
     };

    return (
        <div className="container">
            <header className="header">
                <h1> Login unsuccessful </h1>
            </header>
            <main>
                <div>
                    <p> Your username or password may be incorrect</p>
                    <p> Click here to return to the login page:</p>
                </div>
                <div className="button-container">    
                    <button onClick={handleGoToLogin}>
                        Return to login page
                    </button>
                </div>
            </main>
        </div>
    );
}

export default LogInUnsuc;