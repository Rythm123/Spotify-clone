import React  from 'react';
import "./Login.css";
import {  loginUrl } from './spotify';


function Login() {

    


    return (
        <div className="login">
            <img src="https://heavy.com/wp-content/uploads/2017/02/spotify_logo_horizontal_black.jpg?quality=65&strip=all&w=780"></img>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
