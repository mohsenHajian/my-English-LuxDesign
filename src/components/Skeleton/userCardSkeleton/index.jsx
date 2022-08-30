import React from 'react';
import Skeleton from 'react-loading-skeleton'
import './userCardSkeleton.scss'


const UserSkeleton = () => {
    return (
        <div className='d-flex flex-column mx-4 gap-2 card-item-loading'>
            <Skeleton height={300} />
            <Skeleton height={20} />
            <div className="d-flex justify-content-between w-100 gap-3">
                <div className="w-50">
                    <Skeleton height={20} />
                </div>
                <div className="w-50">
                    <Skeleton height={20} />
                </div>
            </div>
        </div>
    );
}

export default UserSkeleton;