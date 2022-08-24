import React from 'react';
import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'


const AdminSkeleton = () => {
    return ( 
        <div>
            <Skeleton className='py-3 my-2' count={5}></Skeleton>
        </div>

     );
}
 
export default AdminSkeleton;