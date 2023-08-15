import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const handleLogout = ()=> {
        navigate('/');
    };

    return (
        <div>
            <h1> Welcome! </h1>
            <h3> You have successfully logged in </h3>
            <p> Click here to sign out:</p>
            <button onClick={handleLogout}>
                Sign Out
            </button>
        </div>
    );
}

export default Welcome;