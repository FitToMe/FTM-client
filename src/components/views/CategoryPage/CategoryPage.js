import React, {useEffect, useState} from 'react';
import './CategoryPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import PostPreview from "../PostPreview/PostPreview";

function CategoryPage() {
    const location= useLocation();
    const category= location.state.category;

    const [communityPosts, setCommunityPosts] = useState([]);
    const [classPosts, setClassPosts] = useState([]);
    const [clubPosts, setClubPosts] = useState([]);

    useEffect(()=>{
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
    },[])

    return (
        <div className="CategoryPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            {category}

            {/*소모임*/}
            <Link to={`/category/${category}/hobbyClubPage`} state={{category: category }}>
                <div className="category_club_container">
                    소모임
                    {clubPosts.map((element) => (
                        <div key={element}>
                            { <PostPreview key={element.id} postId={element.id} title={element.title}
                                           content={element.content} authorNickname={element.authorNickname}
                                           modDate={element.modDate} regDate={element.regDate}
                                           imageURL={element.imageURL}/>
                            }
                        </div>
                    ))}
                </div>
            </Link>

            {/*클래스*/}
            <Link to={`/category/${category}/hobbyClassPage`} state={{category: category }}>
            <div className="category_class_container">
                클래스
                {classPosts.map((element) => (
                    <div key={element}>
                        { <PostPreview key={element.id} postId={element.id} title={element.title}
                                       content={element.content} authorNickname={element.authorNickname}
                                       modDate={element.modDate} regDate={element.regDate}
                                       imageURL={element.imageURL}/>
                        }
                    </div>
                ))}
            </div>
            </Link>
            {/*커뮤니티*/}
            <Link to={`/category/${category}/hobbyCommunityPage`} state={{category: category }}>
            <div className="category_community_container">
                커뮤니티
                {communityPosts.map((element) => (
                    <div key={element}>
                        { <PostPreview key={element.id} postId={element.id} title={element.title}
                                       content={element.content} authorNickname={element.authorNickname}
                                       modDate={element.modDate} regDate={element.regDate}
                                       imageURL={element.imageURL}/>
                        }
                    </div>
                ))}
            </div>
            </Link>
        </div>
    );
}

export default CategoryPage;