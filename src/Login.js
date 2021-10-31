import React from 'react';
import { login_url } from './authentication';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img src="https://logo-logos.com/wp-content/uploads/2016/10/Spotify_logo_text.png" alt="" width="1000"/>
            <a href={login_url}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login
