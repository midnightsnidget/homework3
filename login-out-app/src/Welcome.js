import React from "react";
import { useHistory } from "react-router-dom";

function Welcome() {
    const history = useHistory();

    const handleLogout = ()=> {
        history.push('/');
    };

    
}
