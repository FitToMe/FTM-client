import React from 'react';
import './Post.css';

/* post preview? */
function Post() {
    return (
        <div className="post">
            <div className="post_info" >

                <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbz88bV%2FbtqCl82YVq9%2FStnHX3ihhKiymwDkU55VZK%2Fimg.png"
                     alt="" />
                <p className="post_category">수상레저</p>
                <p className="post_title">서핑 너무 재밌게 탔어욤 ^^</p>
            </div>
        </div>
    );
}

export default Post;