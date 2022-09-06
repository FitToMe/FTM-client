import React, {useEffect, useState} from 'react';
import './NewPostPage.css';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {login, selectUser} from "../../../_features/userSlice";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import Modal from 'react-modal';
import {Input} from "@mui/material";

function NewPostPage() {
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [inputCategory, setInputCategory]= useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [inputImageURL, setInputImageURL]= useState("");
    const navigate=useNavigate();

    const handleSubmitCategory=(e)=>{
        e.preventDefault();
        setOpenModal(false);

    }

    const handleSubmitPost=(e)=>{
        e.preventDefault();

        //카테고리 추가해야댐
        axios.post('/post/',
            {title: inputTitle, content: inputContent, imageURL: inputImageURL},

        ).then(function(response){
            console.log(response);
            alert('글이 발행되었습니다')
            setInputCategory("");
            setInputTitle("");
            setInputContent("");
            navigate('/');
        }).catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="new_post">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>

            <div className="new_post_input_container">
                <button type="text" className="submit_post" onClick={handleSubmitPost}>등록</button>

                <div className="new_post_info">
                    <h3>글 작성 도구들..</h3>
                    <button onClick={() => setOpenModal(true)}>카테고리</button>

                    <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}
                           shouldCloseOnOverlayClick={false}
                           style={{
                               overlay: {
                                   width: 700,
                                   height: 600,
                                   backgroundColor: "rgba(0,0,0,0.8)",
                                   zIndex: "1000",
                                   top: "50%",
                                   left: "50%",
                                   marginTop: "-300px",
                                   marginLeft: "-350px",
                               }
                           }}>

                        <div className="new_post_select_category">
                            <Input type="text" className="input_category" placeholder="카테고리를 입력하세요" required
                                   value={inputCategory} onChange={(e) => setInputCategory(e.target.value)}/>

                        </div>
                        <div className="new_post_category_buttons">
                            <button onClick={() => setOpenModal(false)}
                                    className="new_post_category_cancel_button">닫기
                            </button>
                            <button type="text" className="new_post_category_add_button"
                                    onClick={handleSubmitCategory}>확인</button>
                        </div>
                    </Modal>
                </div>

                <div className="new_post_input">

                    <Input type="text" className="input_title" placeholder="이미지 url을 입력하세요" required
                           value={inputImageURL} onChange={(e) => setInputImageURL(e.target.value)}/>
                    <Input type="text" className="input_title" placeholder="제목을 입력하세요" required
                           value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
                    <textarea placeholder="내용을 입력하세요" required
                              value={inputContent} onChange={(e) => setInputContent(e.target.value)}/>

                    <Input type="text" className="input_content" placeholder="내용을 입력하세요"/>
                </div>
            </div>
        </div>
    );
}

export default NewPostPage;