import React from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";

function Welcome() {
    const navigate = useNavigate();

    const handleLogout = ()=> {
        navigate('/');
    };

    return (
        <div className="container">
            <header className="header">
                <h1> Welcome! </h1>
            </header>
            <main>
                <div>
                    <p> You have successfully logged in </p>
                    <p> Click here to sign out:</p>
                </div>
                <div className="button-container">
                    <button onClick={handleLogout}>
                        Sign Out
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Welcome;