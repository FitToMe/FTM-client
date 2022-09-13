import React, {useRef, useState} from 'react';
import './NewPostPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import Modal from 'react-modal';
import NewClassPost from "./NewClassPost";
import {AddAPhoto, Category} from "@mui/icons-material";
import preview from "../../../_img/preview.png";
import axios from "axios";
import {Input} from "@mui/material";
import {useSelector} from "react-redux";
import {selectPost} from "../../../_features/postSlice";
import {useNavigate} from "react-router-dom";

function NewPostPage() {
    const [postType, setPostType] = useState("COMMUNITY");  //초기 게시글 종류: community

    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [inputImageURL, setInputImageURL] = useState(preview);
    const imgRef = useRef();

    const post = useSelector(selectPost); //NewClassPost에서 인원수, 가격 정보 받아옴... 안된다 이거
    const navigate = useNavigate();


    //글 카테고리 설정
    const [inputCategory, setInputCategory] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const categoryList = [{data: 'DIY', category: 'DIY'}, {data: 'MUSIC', category: '음악'}, {
        data: 'FLOWER_ARRANGEMENT',
        category: '꽃꽂이'
    }, {data: 'STUDY', category: '공부'},
        {data: 'TRAVEL', category: '여행'}, {data: 'WORKOUT', category: '운동'}, {data: 'TV_SHOW', category: 'TV 프로그램'}];

    //글 종류에 따른 게시글 형식
    const handlePostType = {
        CLASS: <NewClassPost title={inputTitle} content={inputContent} imageURL={inputImageURL} category={inputCategory}
                             postType={postType}/>,
        CLUB: <NewClassPost title={inputTitle} content={inputContent} imageURL={inputImageURL} category={inputCategory}
                            postType={postType}/>,
    };

    //게시글 등록
    const handleSubmitPost = (e) => {
        e.preventDefault();

        let postURL;
        let postAlert;
        let postData;
        if (postType === "COMMUNITY") {
            postURL = '/community-post/';
            postAlert = '커뮤니티';
            postData = {title: inputTitle, content: inputContent, imageURL: inputImageURL, category: inputCategory};
        } else if (postType === "CLASS") {
            postURL = '/class-post/';
            postAlert = '클래스';
            postData = {
                title: inputTitle, content: inputContent, imageURL: inputImageURL, category: inputCategory,
                totalParticipant: post.totalParticipant, cost: post.cost
            };
        } else {
            postURL = '/small-group-post/';
            postAlert = '소모임';
            postData = {
                title: inputTitle, content: inputContent, imageURL: inputImageURL, category: inputCategory,
                totalParticipant: post.totalParticipant, cost: post.cost
            };
        }

        axios.post(postURL, postData,
        ).then(function (response) {
            console.log(response);
            alert(`${postAlert} 글이 발행되었습니다`)
            setInputTitle("");
            setInputContent("");
            setInputImageURL("");
            // setInputCategory("");
            navigate('/');
        }).catch(function (error) {
            console.log(error);
            alert('칸을 모두 채워주세요');
        });
    }

    //카테고리 선택
    const handleSubmitCategory = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    //카테고리는 하나만 선택 가능
    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('categoryType')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false;
            }
        }
        setInputCategory(checkThis.value);
    }

    //이미지 미리보기
    const onChangeImage = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        console.log(file);

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setInputImageURL(reader.result);
            console.log("이미지주소", reader.result)
        }
    };

    // 내용 입력칸 늘어나게 함.
    const resize = (obj) => {
        obj.target.style.height = "1px";
        obj.target.style.height = obj.target.scrollHeight + "px";
    }

    return (
        <div className="new_post">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>

            <div className="new_post_input_container">
                <div className="new_post_info">
                    {/*게시글 종류 바꾸기 버튼*/}
                    <div className="new_post_choice_post_type_container">
                        게시판 선택
                        <div className="new_post_choice_button_container">
                            <button onClick={() => setPostType("COMMUNITY")}>커뮤니티</button>
                            <button onClick={() => setPostType("CLASS")}>클래스</button>
                            <button onClick={() => setPostType("CLUB")}>소모임</button>
                        </div>
                    </div>

                    {/*글 작성 도구들 추가*/}
                    {/*카테고리 선택 컨테이너*/}
                    <div className="new_post_choice_category_container">
                        <Category/>
                        <button onClick={() => setOpenModal(true)}>카테고리</button>
                    </div>

                    <Modal
                        appElement={document.getElementById('app')}
                        isOpen={openModal} onRequestClose={() => setOpenModal(false)}
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
                            {
                                categoryList.map((item, index) => (
                                    <div key={index}>
                                        <input value={item.data} name="categoryType" type="checkbox"
                                               onChange={(e) => checkOnlyOne(e.target)}/>
                                        <span>{item.category}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="new_post_category_buttons">
                            <button onClick={() => setOpenModal(false)}
                                    className="new_post_category_cancel_button">닫기
                            </button>
                            <button type="text" className="new_post_category_add_button"
                                    onClick={handleSubmitCategory}>확인
                            </button>
                        </div>
                    </Modal>

                    {/*이미지 파일 업로드*/}
                    <span className="new_post_input_img_container">
                    <AddAPhoto/>
                    <input className="new_post_select_img" type="file" style={{display: "none"}} ref={imgRef}
                           onChange={onChangeImage}></input>
                    <button onClick={(e) => {
                        imgRef.current.click()
                    }}>이미지 업로드</button>
                    </span>

                    {/*새로운 게시글 등록*/}
                    <button className="new_post_submit_button" type="text"
                            onClick={handleSubmitPost}>등록
                    </button>

                </div>


                <div className="new_post_container">
                    <div className="new_post_category"
                        // style={{display: "none"}}
                    >
                        #{inputCategory}
                    </div>

                    {/*제목 입력*/}
                    <Input type="text" className="new_post_input_title" placeholder="제목을 입력하세요" required
                           value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
                    {/*업로드 이미지 미리보기*/}
                    <img src={inputImageURL ? inputImageURL : preview} alt=""></img>
                    {/*<Input type="text" className="input_title" placeholder="이미지 url을 입력하세요" required*/}
                    {/*       value={inputImageURL} onChange={(e) => setInputImageURL(e.target.value)}/>*/}

                    {/*클래스, 소모임 추가 작성 컴포넌트 호출*/}
                    {
                        postType && <div>{handlePostType[postType]}</div>
                    }

                    {/*업로드 내용 입력*/}
                    <textarea className="new_post_input_content" placeholder="내용을 입력하세요." required
                              value={inputContent} onChange={(e) => setInputContent(e.target.value)}
                              onKeyDown={resize} onKeyUp={resize}/>
                </div>
            </div>
        </div>
    );
}

export default NewPostPage;