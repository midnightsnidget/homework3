import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () =>{
        if (username === 'User' && password === 'Pass') {
            navigate('/welcome');
        } else {
            navigate('/unsuccessful');
        }
     };

    return (
        <div className="container">
                <header className="header">
                    <h1>User Login</h1>
                </header>
                <main>
                    <div>
                        <label htmlFor="username">Enter username:</label>
                        <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Enter password:</label>
                            <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            />
                    </div>
                    <div className="button-container">
                        <button onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </main>
        </div>
    );
}

export default Login;