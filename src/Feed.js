import React from 'react';
import './Feed.css';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <h3 className="feed_category">인기있는 게시물</h3>
            <div className="feed_container" >
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Feed;