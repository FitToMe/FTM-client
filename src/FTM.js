import React from 'react';
import './FTM.css';
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
import Feed from "./Feed";

//FTM 메인 페이지
function Ftm() {
    return (
        <div className="ftm">
            <Navbar/>
            <div className="category_bar">
                <Categorybar/>
            </div>
            <div className="feeds">
                <Feed />
                <Feed />
                <Feed />
                <Feed />
            </div>
        </div>
    );
}

export default Ftm;