import React from 'react';
import './Navbar.css';
import {Avatar, Button} from "@mui/material";
import {Search} from "@mui/icons-material";
import ftm_logo from './img/ftm_logo.png';
import {Link} from "react-router-dom";

function Navbar() {
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
                <Link to="/login">
                    <span className="option_login">로그인</span>
                </Link>
                <Button>취미 추천</Button>
                <Link to="/newPost">
                    <div className="nav_avatar">
                        <Avatar/>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Navbar;