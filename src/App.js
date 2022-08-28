import React, {useEffect} from "react";
import './App.css';
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import {useDispatch} from "react-redux";
import NewPostPage from "./components/views/NewPostPage/NewPostPage";
import MyPage from "./components/views/MyPage/MyPage";
import PostDetailPage from "./components/views/PostDetailPage/PostDetailPage";

function App() {

    const baseUrl = "http://localhost:8080";

    const dispatch = useDispatch();

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

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
