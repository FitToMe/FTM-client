import React, {useState} from 'react';
import axios from "axios";
import {Input} from "@mui/material";
import {useDispatch} from "react-redux";
import {setPostInfo} from "../../../_features/postSlice";

function NewClassPost() {
    const [inputTotalParticipant, setInputTotalParticipant] = useState(0);
    const [inputCost, setInputCost] = useState(0);

    const dispatch= useDispatch();

    const postDispatch=(e)=>{
        e.preventDefault();
        dispatch(setPostInfo({
            totalParticipant: inputTotalParticipant,
            cost: inputCost,
        }))
    }

    return (
        <div className="new_post_container">
            <span>인원 수</span>
            <Input type="number" className="input_participant" onClick={postDispatch} value={inputTotalParticipant} min="0" max="100" onChange={(e) => setInputTotalParticipant(parseInt(e.target.value))} />
            <span>가격</span>
            <Input type="number" className="input_cost" onClick={postDispatch} value={inputCost} min="0" max="10000000" onChange={(e) => setInputCost(parseInt(e.target.value))} />
        </div>
    );
}

export default NewClassPost;