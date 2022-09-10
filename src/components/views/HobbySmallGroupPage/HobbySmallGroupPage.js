import React, {useEffect, useState} from 'react';
import '../HobbyClassPage/HobbyPage.css';
import {useLocation} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import axios from "axios";
import PostPreview from "../PostPreview/PostPreview";

function HobbySmallGroupPage() {
    const location=useLocation();
    const category= location.state.category;
    const [posts, setPosts] = useState([]);

    //전체 커뮤니티 게시글 조회
    useEffect(() => {
        axios.get(`/small-group-post/`, {
                params: {
                    category: category,
                    pageNum: 0,
                    pageSize: 10,
                }
            },
            {withCredentials: true},
        ).then(function (response) {
            setPosts(response.data.response.content);
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <div className="HobbySmallGroupPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            {category}
            <div className="Page_posts">
                {posts.map((element) => (
                    <PostPreview key={element.id} postId={element.id} title={element.title} content={element.content}
                                 authorNickname={element.authorNickname} modDate={element.modDate}
                                 regDate={element.regDate}
                                 imageURL={element.imageURL}/>
                ))
                }
            </div>
        </div>
    );
}

export default HobbySmallGroupPage;