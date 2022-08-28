import './LoginPage.css';
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import ftm_logo from "../../../_img/ftm_logo.png";
import axios from "axios";
import {login} from "../../../_features/userSlice";
import {useDispatch} from "react-redux";

function LoginPage() {

    const dispatch= useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //로그인 버튼 클릭 이벤트
    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/auth/login',
            {email: email, password: password}
        ).then(function(response){
            console.log(response)
            alert(`${email}님 환영합니다 ~`)
            //navigate('/');
        }).catch(function(error){
            console.log(`Error Message: ${error}`);
        })

        setEmail("");
        setPassword("");
    };

    return (
        <div className="login">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>

            <div className="login_container">
                <Link to="/">
                    <img className="login_ftm_logo"
                         src={ftm_logo}
                         alt=""/>
                </Link>

                <form>
                    <h5>아이디</h5>
                    <input type="text" placeholder="이메일"
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>비밀번호</h5>
                    <input type="password" placeholder="비밀번호"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="login_signInButton"
                            type="submit" onClick={handleLogin}>로그인
                    </button>
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

export default LoginPage;