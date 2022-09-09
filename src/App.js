import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NewPostPage from "./components/views/NewPostPage/NewPostPage";
import MyPage from "./components/views/MyPage/MyPage";
import PostDetailPage from "./components/views/PostDetailPage/PostDetailPage";
import {useDispatch} from "react-redux";
import axios from "axios";
import CategoryPage from "./components/views/CategoryPage/CategoryPage";
import HobbyClubPage from "./components/views/HobbyClubPage/HobbyClubPage";
import HobbyClassPage from "./components/views/HobbyClassPage/HobbyClassPage";
import HobbyCommunityPage from "./components/views/HobbyCommunityPage/HobbyCommunityPage";

function App() {
    //페이지 시작하자마자 실행
   useEffect(() => {
         axios.get('/auth',
            {withCredentials: true},
        ).then(function (response) {
            console.log("로그인 되어있음.")
        }).catch(function (error) {
            console.log(error);
        })
    });

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>

                    <Route path="/newPost" element={<NewPostPage/>}/>
                    <Route path="/myPage/:user" element={<MyPage/>}/>
                    <Route path="/postDetail" element={<PostDetailPage/>}/>

                    <Route path="/category/:category" element={<CategoryPage/>} />
                    <Route path="/category/:category/hobbyClubPage" element={<HobbyClubPage/>} />
                    <Route path="/category/:category/hobbyClassPage" element={<HobbyClassPage/>} />
                    <Route path="/category/:category/hobbyCommunityPage" element={<HobbyCommunityPage/>} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
