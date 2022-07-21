import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import FTM from "./FTM";
import Login from "./Login";
import Register from "./Register";
import NewPost from "./NewPost";


function App() {
    return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<FTM/>}/>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/newPost" element={<NewPost />} />
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

export default App;
