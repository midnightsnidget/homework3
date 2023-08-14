import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () =>{
        if (username === 'correctUsername' && password === 'correctPassword') {
            history.push('/welcome');
        } else {
            history.push('unsuccessful');
        }

        };
    }