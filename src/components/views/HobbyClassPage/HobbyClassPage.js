import React, {useEffect, useState} from 'react';
import './HobbyPage.css';
import {useLocation} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import axios from "axios";
import PostPreview from "../PostPreview/PostPreview";

function HobbyClassPage() {
    const location = useLocation();
    const category = location.state.category;
    const [posts, setPosts] = useState([]);


    //전체 클래스 게시글 조회
    useEffect(() => {
        axios.get(`/class-post/`,
            {withCredentials: true},
        ).then(function (response) {
            setPosts(response.data.response);
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <div className="HobbyClassPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            {category}
            <div className="classPage_posts">
                {posts.map((element) => (
                    <PostPreview key={element.id} postId={element.id} title={element.title} content={element.content}
                                 authorNickname={element.authorNickname} modDate={element.modDate}
                                 regDate={element.regDate}
                                 imageURL={element.imageURL}/>
                ))
                }
            </div>
            HobbyClassPage</div>
    );
}

export default HobbyClassPage;