import React from 'react';
import './CategoryPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Link, useLocation} from "react-router-dom";

function CategoryPage() {
    const location= useLocation();
    const category= location.state.category;

    return (
        <div className="CategoryPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            {/*소모임*/}
            <Link to={`/category/${category}/hobbyClubPage`} state={{category: category }}>
                <div className="category_club_container">
                    {category}
                    소모임
                </div>
            </Link>

            {/*클래스*/}
            <Link to={`/category/${category}/hobbyClassPage`} state={{category: category }}>
            <div className="category_class_container">
                클래스
            </div>
            </Link>
            {/*커뮤니티*/}
            <Link to={`/category/${category}/hobbyCommunityPage`} state={{category: category }}>
            <div className="category_community_container">
                커뮤니티
            </div>
            </Link>
        </div>
    );
}

export default CategoryPage;