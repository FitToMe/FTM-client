import React from 'react';
import './NewPost.css';
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
import {Input} from "@mui/material";

function NewPost() {
    return (
        <div className="new_post">
            <Navbar/>
            <div className="category_bar">
                <Categorybar/>
            </div>

            <div className="new_post_input_container">
                <button type="text" className="submit_post">등록</button>
                <div className="new_post_info">
                    <h3>글 작성 도구들..</h3>
                    <button>카테고리</button>
                </div>
                <div className="new_post_input">

                    <Input type="text" className="input_title" placeholder="제목을 입력하세요" />
                    <textarea placeholder="내용을 입력하세요" />
                    <Input type="text" className="input_content" placeholder="내용을 입력하세요" />
                </div>
            </div>
        </div>
    );
}

export default NewPost;