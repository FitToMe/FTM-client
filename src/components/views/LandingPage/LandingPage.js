import React from 'react';
import './LandingPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import CategoryMenu from "./CategoryMenu";

function LandingPage() {

    return (
        <div className="ftm">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            <div className="category_menus">
                <div className="category_menu">
                    <CategoryMenu
                        img="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F4f%2Fcd%2Fcd4fcd260778f99ec91e77cce9a61bf7.jpg&type=a340"
                        title="운동"
                        description="운동에 관심있는 분들 들어오세요" />
                </div>
                <div className="category_menu">
                    <CategoryMenu
                        img="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F4f%2Fcd%2Fcd4fcd260778f99ec91e77cce9a61bf7.jpg&type=a340"
                        title="운동"
                        description="운동에 관심있는 분들 들어오세요" />
                </div>
                <div className="category_menu">
                    <CategoryMenu
                        img="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F4f%2Fcd%2Fcd4fcd260778f99ec91e77cce9a61bf7.jpg&type=a340"
                        title="운동"
                        description="운동에 관심있는 분들 들어오세요" />
                </div>
                <div className="category_menu">
                    <CategoryMenu
                        img="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F4f%2Fcd%2Fcd4fcd260778f99ec91e77cce9a61bf7.jpg&type=a340"
                        title="운동"
                        description="운동에 관심있는 분들 들어오세요" />
                </div>
                <div className="category_menu">
                    <CategoryMenu
                        img="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F4f%2Fcd%2Fcd4fcd260778f99ec91e77cce9a61bf7.jpg&type=a340"
                        title="운동"
                        description="운동에 관심있는 분들 들어오세요" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;