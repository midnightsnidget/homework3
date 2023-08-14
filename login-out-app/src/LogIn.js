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

    return (
        <div>
            <h1>LogIn Page</h1>
            
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />

        </div>
    )
}