import React from 'react';
import { miladi_be_shamsi } from '../../utils/dateConvert';
import './comment.style.scss'

const Comment = ({comment}) => {
    const moment = require('moment');



    let dateString = moment(comment.date).format('YYYY/M/D').split('/').map(num=>Number(num));
    return (
        <div className=" w-100 d-flex gap-3">
            <div className="profile-image-comment"></div>
            <div className="comment-details d-flex flex-column gap-3 flex-grow-1 p-3">
                <div className="d-flex gap-5">
                    <span className='arthor ms-5'>نویسنده : {comment.arthor}</span>
                    <span className='comment-date fa-num text-secondary'>ارسال شده در {miladi_be_shamsi(dateString[0],dateString[1],dateString[2])}</span>
                </div>
                <span className='comment-text'>{comment.text}</span>
            </div>
        </div>
    );
}

export default Comment;