import './LoginPage.css';
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import ftm_logo from "../../../_img/ftm_logo.png";
import axios from "axios";
import {login, selectUser} from "../../../_features/userSlice";
import {useDispatch, useSelector} from "react-redux";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user= useSelector(selectUser);

    const navigate = useNavigate();

    //로그인 버튼 클릭 이벤트
    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('/auth/login',
            {email: email, password: password},
            {withCredentials: true},
        ).then(function(response){
            console.log(response)
            alert(`환영합니다 ~`)

            axios.get('/auth',
                {withCredentials: true},
            ).then(function (response) {
                dispatch(login({
                    uid: response.data.response.id,
                    email: response.data.response.email,
                    nickName: response.data.response.nickname
                }))
            }).catch(function (error) {
                console.log(error);
            })

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