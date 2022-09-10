import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import './PostPreview.css';
import {setPostInfo} from "../../../_features/postSlice";

//게시글 미리보기 container
function PostPreview(props) {
    const dispatch = useDispatch();

    return (
        <div className="PostPreview"
             onClick={() => dispatch(setPostInfo({
                 postId: props.postId,
                 category: props.category,
                 title: props.title,
                 content: props.content,
                 authorNickname: props.authorNickname,
                 modDate: props.modDate,
                 regDate: props.regDate,
                 imageURL: props.imageURL,
                 viewCnt: props.viewCnt,
             }))}
        >

            {/*클릭하면 게시글 상세 페이지로 이동*/}
            <Link to="/postDetail">
                <div className="postPreview_info">
                    <img className="postPreview_img" src={props.imageURL}
                         alt=""/>
                    <p className="postPreview_category">{props.category}</p>
                    <p className="postPreview_title">{props.title}</p>
                </div>
            </Link>
        </div>
    );
}

export default PostPreview;