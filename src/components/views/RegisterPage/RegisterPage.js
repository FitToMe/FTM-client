import './RegisterPage.css';
import React, {useState} from 'react';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Link, useNavigate} from "react-router-dom";
import ftm_logo from "../../../_img/ftm_logo.png";
import axios from "axios";

function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickName, setNickName] = useState("");
    const navigate= useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        axios.post('/auth/signup',
            {email: email, password: password, nickname: nickName}
        ).then(function (response) {
            //회원가입 성공했을 때만
            navigate('/login');
            console.log(response.data);
            alert(`${nickName}님 환영합니다~`);
        }).catch(function (error) {
            console.log(`Error Message: ${error}`);
        })

        setEmail("");
        setPassword("");
        setNickName("");
    };

    return (
        <div className="register">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>

            <div className="register_container">
                <Link to="/">
                    <img className="register_ftm_logo"
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


                    <h5>비밀번호 재확인</h5>
                    <input className="register_divide" type="password"/>

                    <h5>이름</h5>
                    <input type="text"/>
                    <h5>닉네임</h5>
                    <input type="text" placeholder="닉네임"
                           value={nickName} onChange={(e) => setNickName(e.target.value)}/>
                    <h5>생년월일</h5>
                    <input type="text"/>
                    <h5>성별</h5>
                    <input type="text"/>
                    <h5>휴대전화</h5>
                    <input type="text"/>

                    <button className="register_signUpButton" onClick={handleRegister}>가입하기</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;