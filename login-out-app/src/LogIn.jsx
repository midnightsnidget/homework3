import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () =>{
        if (username === 'correctUsername' && password === 'correctPassword') {
            navigate('/welcome');
        } else {
            navigate('/unsuccessful');
        }
     };

    return (
        <div>
            <h1>User Login</h1>
            <div>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;