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
            {
                params: {
                    category: category,
                    pageNum: 0,
                    pageSize: 4,
                }
            },
            {withCredentials: true},
        ).then(function (response) {
            setCommunityPosts(response.data.response.content);
        }).catch(function (error) {
            console.log(error);
        })

        axios.get(`/class-post/`,
            {
                params: {
                    category: category,
                    pageNum: 0,
                    pageSize: 4,
                }
            },
            {withCredentials: true},
        ).then(function (response) {
            setClassPosts(response.data.response.content);
        }).catch(function (error) {
            console.log(error);
        })

        axios.get(`/small-group-post/`, {
                params: {
                    category: category,
                    pageNum: 0,
                    pageSize: 4,
                }
            },
            {withCredentials: true},
        ).then(function (response) {
            setClubPosts(response.data.response.content);
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

            <div className="category_center">
                {/*소모임*/}
                <div className="category_detail_container">
                    <Link to={`/category/${category}/hobbySmallGroupPage`} state={{category: category}}>
                        {category} 소모임
                    </Link>
                    <div className="category_post_container">
                        {clubPosts.map((element) => (
                            <div key={element.id}>
                                {<PostPreview key={element.id} postId={element.id} category={category}
                                              title={element.title}
                                              content={element.content} authorNickname={element.authorNickname}
                                              modDate={element.modDate} regDate={element.regDate}
                                              imageURL={element.imageURL}
                                              totalParticipant={element.totalParticipant}
                                              participantNum={element.participantNum} viewCnt={element.viewCnt}
                                              cost={element.cost} isRecruiting={element.isRecruiting}/>
                                }
                            </div>
                        ))}
                    </div>
                </div>


                <div className="category_detail_container">
                    {/*클래스*/}
                    <Link to={`/category/${category}/hobbyClassPage`} state={{category: category}}>
                        {category} 클래스
                    </Link>
                    <div className="category_post_container">
                        {classPosts.map((element) => (
                            <div key={element.id}>
                                {<PostPreview key={element.id} postId={element.id} title={element.title}
                                              content={element.content} authorNickname={element.authorNickname}
                                              modDate={element.modDate} regDate={element.regDate}
                                              imageURL={element.imageURL}
                                              totalParticipant={element.totalParticipant}
                                              participantNum={element.participantNum} viewCnt={element.viewCnt}
                                              cost={element.cost} isRecruiting={element.isRecruiting}/>
                                }
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category_detail_container">
                    {/*커뮤니티*/}
                    <Link to={`/category/${category}/hobbyCommunityPage`} state={{category: category}}>
                        {category} 커뮤니티
                    </Link>
                    <div className="category_post_container">
                        {communityPosts.map((element) => (
                            <div key={element.id}>
                                {<PostPreview key={element.id} postId={element.id} title={element.title}
                                              content={element.content} authorNickname={element.authorNickname}
                                              modDate={element.modDate} regDate={element.regDate}
                                              imageURL={element.imageURL} viewCnt={element.viewCnt}/>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;