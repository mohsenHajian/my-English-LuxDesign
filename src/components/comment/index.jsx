import React from 'react';
import './comment.style.scss'

const Comment = ({comment}) => {
    return (
        <div className=" w-100 d-flex gap-3">
            <div className="profile-image-comment"></div>
            <div className="comment-details d-flex flex-column gap-3 flex-grow-1 p-3">
                <div className="d-flex gap-5">
                    <span className='arthor ms-5'>نویسنده : {comment.arthor}</span>
                    <span className='comment-date fa-num text-secondary'>ارسال شده در {comment.date}</span>
                </div>
                <span className='comment-text'>{comment.text}</span>
            </div>
        </div>
    );
}

export default Comment;