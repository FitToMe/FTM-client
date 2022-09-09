import React, {useEffect, useState} from 'react';
import './CategoryPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import PostPreview from "../PostPreview/PostPreview";

function CategoryPage() {
    //현재 url 정보로 카테고리 가져오기
    const location = useLocation();
    const category = location.state.category;

    //커뮤니티, 클래스, 소모임 각 게시글들
    const [communityPosts, setCommunityPosts] = useState([]);
    const [classPosts, setClassPosts] = useState([]);
    const [clubPosts, setClubPosts] = useState([]);

    useEffect(() => {
        axios.get(`/community-post/`,
            {withCredentials: true},
        ).then(function (response) {
            setCommunityPosts(response.data.response);
        }).catch(function (error) {
            console.log(error);
        })

        axios.get(`/class-post/`,
            {withCredentials: true},
        ).then(function (response) {
            setClassPosts(response.data.response);
        }).catch(function (error) {
            console.log(error);
        })

        axios.get(`/small-group-post/`,
            {withCredentials: true},
        ).then(function (response) {
            setClubPosts(response.data.response);
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

    return (
        <div className="CategoryPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            {category}

            {/*소모임*/}
            <div className="category_club_container">
                <Link to={`/category/${category}/hobbyClubPage`} state={{category: category}}>
                    소모임
                </Link>
                {clubPosts.map((element) => (
                    <div key={element.id}>
                        {<PostPreview key={element.id} postId={element.id} title={element.title}
                                      content={element.content} authorNickname={element.authorNickname}
                                      modDate={element.modDate} regDate={element.regDate}
                                      imageURL={element.imageURL}/>
                        }
                    </div>
                ))}
            </div>


            {/*클래스*/}
            <div className="category_class_container">
                <Link to={`/category/${category}/hobbyClassPage`} state={{category: category}}>
                    클래스
                </Link>
                {classPosts.map((element) => (
                    <div key={element.id}>
                        {<PostPreview key={element.id} postId={element.id} title={element.title}
                                      content={element.content} authorNickname={element.authorNickname}
                                      modDate={element.modDate} regDate={element.regDate}
                                      imageURL={element.imageURL}/>
                        }
                    </div>
                ))}
            </div>

            {/*커뮤니티*/}
            <div className="category_community_container">
                <Link to={`/category/${category}/hobbyCommunityPage`} state={{category: category}}>
                    커뮤니티
                </Link>
                {communityPosts.map((element) => (
                    <div key={element.id}>
                        {<PostPreview key={element.id} postId={element.id} title={element.title}
                                      content={element.content} authorNickname={element.authorNickname}
                                      modDate={element.modDate} regDate={element.regDate}
                                      imageURL={element.imageURL}/>
                        }
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CategoryPage;