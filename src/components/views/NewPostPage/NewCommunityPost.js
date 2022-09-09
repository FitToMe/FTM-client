import React, {useState} from 'react';
import axios from "axios";
import {Input} from "@mui/material";

function NewCommunityPost(props) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [inputImageURL, setInputImageURL] = useState("");

    const handleSubmitPost = (e) => {
        e.preventDefault();

        //카테고리 추가해야댐
        axios.post('/community-post/',
            {title: inputTitle, content: inputContent, imageURL: inputImageURL, category: props.category},
        ).then(function (response) {
            console.log(response);
            alert('커뮤니티 글이 발행되었습니다')
            setInputTitle("");
            setInputContent("");
            setInputImageURL("");
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (

        <div className="new_post_container">
            <button type="text" className="submit_post" onClick={handleSubmitPost}>등록</button>

            <Input type="text" className="input_title" placeholder="이미지 url을 입력하세요" required
                   value={inputImageURL} onChange={(e) => setInputImageURL(e.target.value)}/>
            <Input type="text" className="input_title" placeholder="제목을 입력하세요" required
                   value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
            <textarea placeholder="내용을 입력하세요" required
                      value={inputContent} onChange={(e) => setInputContent(e.target.value)}/>

        </div>
    );
}

export default NewCommunityPost;