import React from 'react';
import './Login.css';
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
import {Link} from "react-router-dom";
import ftm_logo from './img/ftm_logo.png';

function Login() {
    return (
        <div className="login">
            <Navbar/>
            <div className="category_bar">
                <Categorybar/>
            </div>

            <div className="login_container">
                <Link to="/">
                    <img className="login_ftm_logo"
                         src={ftm_logo}
                         alt="" />
                </Link>

                <form>
                    <h5>아이디</h5>
                    <input type="text" />
                    <h5>비밀번호</h5>
                    <input type="password" />

                    <button className="login_signInButton" >로그인</button>

                </form>

                <div className="login_options">
                    <button className="login_option">비밀번호 찾기</button>
                    <span>|</span>
                    <button className="login_option">아이디 찾기</button>
                    <span>|</span>
                    <Link to="/register">
                        <button className="login_option">회원가입</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;