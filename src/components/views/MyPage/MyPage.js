import React, {useState} from 'react';
import './MyPage.css';
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../NavBar/CategoryBar";
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUser} from "../../../_features/userSlice";

function MyPage() {
    const user = useSelector(selectUser);
    const [myPosts, setMyPosts] = useState([]);


    return (
        <div className="myPage">
            <NavBar/>
            <div className="category_bar">
                <CategoryBar/>
            </div>
            <div className="myPage_info">
                <Avatar/>
                <h4><strong>{user.email}</strong></h4>
                <hr/>
                <div className="myPage_posts">
                    {myPosts.map(({id, post}) => (
                        <div key={id}>
                            {/*
                                user.email === post.user.email ?
                                    (<Post key={id} tPostId={id} category={post.category} title={post.title} user={post.user} timestamp={post.timestamp} content={post.content}
                                           image={"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbz88bV%2FbtqCl82YVq9%2FStnHX3ihhKiymwDkU55VZK%2Fimg.png"}/>

                                    ) : ("")
                            */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyPage;