import React from 'react';
import '../HobbyClassPage/HobbyPage.css';
import {useLocation} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";

function HobbyClubPage() {
    const location=useLocation();
    const category= location.state.category;

    return (
        <div className="HobbyClubPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>

            {category} HobbyClubPage
        </div>
    );
}

export default HobbyClubPage;