import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass === confirmPass) {
            // Passwords match, you can proceed with registration
            console.log("Registration successful");
        } else {
            // Passwords do not match, handle the error or display a message
            setPasswordsMatch(false);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">User name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="User Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="number">Phone Number</label>
                <input value={number} name="number" onChange={(e) => setNumber(e.target.value)} id="number" placeholder="Phone Number (e.g., 123-456-7890)" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="********" id="confirmPassword" name="confirmPassword" />
                {!passwordsMatch && <p className="password-mismatch">Passwords do not match</p>}
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
