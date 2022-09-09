import React, {useState} from 'react';
import axios from "axios";
import {Input} from "@mui/material";

function NewClassPost(props) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [inputImageURL, setInputImageURL] = useState("");
    const [inputTotalParticipant, setInputTotalParticipant] = useState(0);
    const [inputCost, setInputCost] = useState(0);

    const handleSubmitPost = (e) => {
        e.preventDefault();

        let postURL;
        let postAlert;
        if(props.postType=== "CLASS"){
            postURL='/class-post/';
            postAlert='클래스';
        }else{
            postURL='/small-group-post/';
            postAlert='소모임';
        }

        //카테고리 추가해야댐
        axios.post(postURL,
            {title: inputTitle, content: inputContent, imageURL: inputImageURL, totalParticipant:inputTotalParticipant, cost: inputCost, category: props.category},
        ).then(function (response) {
            console.log(response);
            alert(`${postAlert} 글이 발행되었습니다.`)
            setInputTitle("");
            setInputContent("");
            setInputImageURL("");
            setInputTotalParticipant(0);
            setInputCost(0);
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
            <span>인원 수</span>
            <Input type="number" className="input_participant" value={inputTotalParticipant} min="0" max="100" onChange={(e) => setInputTotalParticipant(parseInt(e.target.value))} />
            <span>가격</span>
            <Input type="number" className="input_cost" value={inputCost} min="0" max="10000000" onChange={(e) => setInputCost(parseInt(e.target.value))} />

        </div>
    );
}

export default NewClassPost;