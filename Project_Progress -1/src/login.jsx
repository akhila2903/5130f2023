import React, { useState } from "react";

export const Login = (props) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, rememberMe);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">User Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="User Name" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember Me
                </label>
                <button type="submit">Log In</button>
            </form>
            <p className="forgot-password">
                <a href="#">Forgot Password?</a>
            </p>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
