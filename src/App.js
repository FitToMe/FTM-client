import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NewPostPage from "./components/views/NewPostPage/NewPostPage";
import MyPage from "./components/views/MyPage/MyPage";
import PostDetailPage from "./components/views/PostDetailPage/PostDetailPage";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import CategoryPage from "./components/views/CategoryPage/CategoryPage";
import HobbyClubPage from "./components/views/HobbyClubPage/HobbyClubPage";
import HobbyClassPage from "./components/views/HobbyClassPage/HobbyClassPage";
import HobbyCommunityPage from "./components/views/HobbyCommunityPage/HobbyCommunityPage";
import {login, selectUser} from "./_features/userSlice";

function App() {
    const user= useSelector(selectUser);
    const dispatch = useDispatch();

   useEffect(() => {
       //회원 로그인 상태 유지
       if(!user){
           axios.get('/auth',
               {withCredentials: true},
           ).then(function (response) {
               dispatch(login({
                   uid: response.data.response.id,
                   email: response.data.response.email,
                   nickName: response.data.response.nickname
               }))
           }).catch(function (error) {
               console.log(error);
           })
       }
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
