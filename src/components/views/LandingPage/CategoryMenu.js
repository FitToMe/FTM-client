import React from 'react';
import './CategoryMenu.css';

function CategoryMenu(props) {
    return (
        <div className="CategoryMenu">
            {/*카테고리에 대한 새 글 작성일?*/}
            <img className="category_img" src={props.img} alt=""/>
            <h2 className="category_title">{props.title}</h2>
            <h2 className="category_description">{props.description}</h2>
        < /div>
    );
}

export default CategoryMenu;