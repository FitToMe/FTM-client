import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";
import ftm_logo from "../../../_img/ftm_logo.png";
import {Avatar, Button} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectUser} from "../../../_features/userSlice";


function NavBar() {
    const user = useSelector(selectUser);

    const handleAuthentication = () => {
        if (user) {
            //로그아웃
        }
    }

    return (
        <div className="navbar">
            <Link to="/">
                <div className="ftm_logo">
                    <img src={ftm_logo} alt=""/>
                </div>
            </Link>

            <div className="nav_search">
                <input type="text" placeholder="검색하기"/>
                <Search/>
            </div>

            <div className="nav_option">
                <Link to={!user && '/login'}>
                    <span className="option_login" onClick={handleAuthentication}>{user ? '로그아웃' : '로그인'}</span>
                </Link>
                <Button>취미 추천</Button>
                <Link to="/newPost">
                    <Button>글쓰기</Button>
                </Link>
                <Link to={`/myPage/${user}`}>
                    <div className="nav_avatar">
                        <Avatar/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;