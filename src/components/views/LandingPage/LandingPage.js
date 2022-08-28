import React, {useEffect} from 'react';
import './LandingPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {useDispatch} from "react-redux";

function LandingPage() {

    const dispatch= useDispatch();

    //페이지 시작하자마자 실행
    useEffect(()=>{

        },[])

    return (
        <div className="ftm">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
                <div>
                    landingpage
                </div>
            </div>
        </div>
    );
}

export default LandingPage;