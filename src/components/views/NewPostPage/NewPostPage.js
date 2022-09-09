import React, {useState} from 'react';
import './NewPostPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import Modal from 'react-modal';
import NewCommunityPost from "./NewCommunityPost";
import NewClassPost from "./NewClassPost";

function NewPostPage() {
    const [type, setType] = useState("COMMUNITY");  //초기 게시글 종류: community

    const [openModal, setOpenModal] = useState(false);
    const categoryList = [{data: 'DIY', category: 'DIY'}, {data: 'MUSIC', category: '음악'}, {
        data: 'FLOWER_ARRANGEMENT',
        category: '꽃꽂이'
    }, {data: 'STUDY', category: '공부'},
        {data: 'TRAVEL', category: '여행'}, {data: 'WORKOUT', category: '운동'}, {data: 'TV_SHOW', category: 'TV 프로그램'}];

    const [inputCategory, setInputCategory] = useState("");

    const handlePostType = {
        COMMUNITY: <NewCommunityPost category={inputCategory}/>,
        CLASS: <NewClassPost category={inputCategory} postType={type}/>,
        CLUB: <NewClassPost category={inputCategory} postType={type}/>,
    };

    const handleSubmitCategory = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('categoryType')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false;
            }
        }
        setInputCategory(checkThis.value);
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
                    <button onClick={() => setType("COMMUNITY")}>커뮤니티</button>
                    <button onClick={() => setType("CLASS")}>클래스</button>
                    <button onClick={() => setType("CLUB")}>소모임</button>

                    <h3>글 작성 도구들..</h3>
                    <button onClick={() => setOpenModal(true)}>카테고리</button>
                    <p>{inputCategory}</p>

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
                </div>

                <div className="new_post_input">
                    {
                        type && <div>{handlePostType[type]}</div>
                    }

                </div>
            </div>
        </div>
    );
}

export default NewPostPage;