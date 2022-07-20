import React from 'react';
import './FTM.css';
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";

//FTM 메인 페이지
function Ftm() {
    return (
        <div className="ftm">
            <Navbar/>
            <div className="category_bar">
                <Categorybar/>
            </div>
            <h1> 메인페이지 </h1>
        </div>
    );
}

export default Ftm;