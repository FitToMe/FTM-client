import React from 'react';
import './Register.css'
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
import {Link} from "react-router-dom";
import ftm_logo from "./img/ftm_logo.png";

function Register() {
    return (
        <div className="register">
            <Navbar/>
            <div className="category_bar">
                <Categorybar/>
            </div>

            <div className="register_container">
                <Link to="/">
                    <img className="register_ftm_logo"
                         src={ftm_logo}
                         alt="" />
                </Link>

                <form>
                    <h5>아이디</h5>
                    <input type="text" />
                    <h5>비밀번호</h5>
                    <input type="password" />
                    <h5>비밀번호 재확인</h5>
                    <input className="register_divide" type="password" /> {/*확인*/}

                    <h5>이름</h5>
                    <input type="text" />
                    <h5>이메일</h5>
                    <input type="text" />
                    <h5>생년월일</h5>
                    <input type="text" />
                    <h5>성별</h5>
                    <input type="text" />
                    <h5>휴대전화</h5>
                    <input type="text" />

                    <button className="register_signUpButton" >가입하기</button>

                </form>

            </div>
        </div>
    );
}

export default Register;