import React from 'react';
import '../HobbyClassPage/HobbyPage.css';
import {useLocation} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";

function HobbyCommunityPage() {
    const location=useLocation();
    const category= location.state.category;

    return (
        <div className="HobbyCommunityPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            HobbyCommunityPage</div>
    );
}

export default HobbyCommunityPage;