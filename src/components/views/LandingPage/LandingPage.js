import React from 'react';
import './LandingPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import CategoryMenu from "./CategoryMenu";

//카테고리 아이콘들
import travel_icon from '../../../_img/travel_icon.png';
import sport_icon from '../../../_img/sport_icon.png';
import study_icon from '../../../_img/study_icon.png'
import tv_program_icon from '../../../_img/tv_program_icon.png'
import music_icon from '../../../_img/music_icon.png'
import flower_icon from '../../../_img/flower_icon.png'
import DIY_icon from '../../../_img/DIY_icon.png'
import {Link} from "react-router-dom";


function LandingPage() {
    return (
        <div className="ftm">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            <div className="category_menus">
                <Link to= "/category/travel" state={{category: '여행'}}>
                    <div className="category_menu">
                        <CategoryMenu
                            img={travel_icon}
                            title="여행"
                            description="여행이 취미인 사람~"/>
                    </div>
                </Link>
                <Link to="/category/sport" state={{category: '운동'}}>
                    <div className="category_menu">
                        <CategoryMenu
                            img={sport_icon}
                            title="운동"
                            description="운동이 취미인 사람~"/>
                    </div>
                </Link>
                <Link to="/category/study" state={{category: '공부'}}>
                <div className="category_menu">
                    <CategoryMenu
                        img={study_icon}
                        title="공부"
                        description="공부 하고싶은 사람~"/>
                </div>
                </Link>
                <Link to="/category/tv_program" state={{category: '드라마, 영화'}}>
                <div className="category_menu">
                    <CategoryMenu
                        img={tv_program_icon}
                        title="드라마, 영화"
                        description="드라마, 영화 취미인 사람~"/>
                </div>
                </Link>
                <Link to="/category/music" state={{category: '음악'}}>
                <div className="category_menu">
                    <CategoryMenu
                        img={music_icon}
                        title="음악"
                        description="운동이 취미인 사람~"/>
                </div>
                </Link>
                <Link to="/category/flower" state={{category: '꽃꽂이'}}>
                <div className="category_menu">
                    <CategoryMenu
                        img={flower_icon}
                        title="꽃꽂이"
                        description="운동이 취미인 사람~"/>
                </div>
                </Link>
                <Link to="/category/DIY" state={{category: 'DIY'}}>
                <div className="category_menu">
                    <CategoryMenu
                        img={DIY_icon}
                        title="DIY"
                        description="운동이 취미인 사람~"/>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;