import React from 'react';
import { miladi_be_shamsi } from '../../utils/dateConvert';
import './comment.style.scss'

const Comment = ({comment}) => {
    const moment = require('moment');



    let dateString = moment(comment.date).format('YYYY/M/D');
    return (
        <div className=" w-100 d-flex gap-3">
            <div className="profile-image-comment"></div>
            <div className="comment-details d-flex flex-column gap-3 flex-grow-1 p-3">
                <div className="d-flex gap-5">
                    <span className='arthor me-5'>Arthor : {comment.arthor}</span>
                    <span className='comment-date fa-num text-secondary'>sent at {dateString}</span>
                </div>
                <span className='comment-text'>{comment.text}</span>
            </div>
        </div>
    );
}

export default Comment;