import React from 'react';
import './PostDetailPage.css';
import {useSelector} from "react-redux";
import {selectPost} from "../../../_features/postSlice";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Avatar} from "@mui/material";

function PostDetailPage() {
    const post = useSelector(selectPost);

    return (
        <div className="PostDetailPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>

            <div className="post_detail_info">
                <p className="post_category">{post.category}</p>
                <p className="post_title"><strong>{post.title}</strong></p>
                <div className="post_detail_info_container">
                    <Avatar/>
                    <div className="post_detail_info_container_col">
                        <p className="post_user"><strong>{post.authorNickname}</strong></p>
                        <small>{post.regDate}</small>
                    </div>
                </div>
                <hr/>
                <div className="post_detail_content">
                    <img
                        src={post.imageURL}
                        alt=""/>
                    <p>{post.content}</p>
                </div>

                <hr/>

                {/*글에 대한 댓글들*/}
            </div>
        </div>
    );
}

export default PostDetailPage;