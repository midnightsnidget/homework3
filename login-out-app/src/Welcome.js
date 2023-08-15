import React from "react";
import { useHistory } from "react-router-dom";

function Welcome() {
    const history = useHistory();

    const handleLogout = ()=> {
        history.push('/');
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
    )

}

export default Welcome;
