import React from 'react';
import Skeleton from 'react-loading-skeleton'


const UserSkeleton = () => {
    return ( 
        <div>
            <Skeleton className='py-3 my-2' baseColor='#666'>
                <Skeleton baseColor='#666' circle={100} width={60} height={60}  />
            </Skeleton>
        </div>

     );
}
 
export default UserSkeleton;