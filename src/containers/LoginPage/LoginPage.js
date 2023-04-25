import './LoginPage.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = ({ setIsLoggedIn, setUserName }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogIn = (e) => {
        e.preventDefault()

        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userName', login);


        setUserName(login);
        setIsLoggedIn(true);
        navigate("/", { replace: true });
        

    }

    return (
        <h1>
            <form className="login-form" onSubmit={handleLogIn}>
                <h1>Autorizācija</h1>
                <div>
                    <input
                        className="login-form-input"
                        type="text"
                        placeholder="Lietotājvārds"
                        onChange={handleLoginChange}
                        required />
                </div>
                <div>
                    <input
                        className="login-form-input"
                        type="password"
                        placeholder="Parole"
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button className="login-button" type="submit">
                        Ielogoties
                    </button>
                </div>
            </form>
        </h1>
    )
}