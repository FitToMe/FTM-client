import React, {useEffect, useState} from 'react';
import './MyPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Avatar, Button} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUser} from "../../../_features/userSlice";
import axios from "axios";
import PostPreview from "../PostPreview/PostPreview";

function MyPage() {
    const user = useSelector(selectUser);
    const [myPosts, setMyPosts] = useState([]);

    //전체 게시글 조회
    useEffect(() => {
        axios.get(`/post/`,
            {withCredentials: true},
        ).then(function (response) {
            setMyPosts(response.data.response);
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <div className="myPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            <div className="myPage_container">
                <div className="myPage_info">
                    <Avatar/>
                    <h4><strong>{user.nickName}</strong></h4>
                </div>
                <hr/>
                <div className="myPage_posts">
                    {/*전체 게시글 중 회원이 쓴 게시글 조회
                    : 게시글 조회하는데 uid말고 닉네임이 있길래 닉네임으로 조회했음.*/}
                    {myPosts.map((element) => (
                        <div key={element}>
                            { // viewCnt 추가
                                user.nickName === element.authorNickname ?
                                    (<PostPreview key={element.id} postId={element.id} title={element.title}
                                                  content={element.content} authorNickname={element.authorNickname}
                                                  modDate={element.modDate} regDate={element.regDate}
                                                  imageURL={element.imageURL}/>
                                    ) : ("")
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyPage;