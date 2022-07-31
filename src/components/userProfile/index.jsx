import { Icon } from '@iconify/react';
import React from 'react';
import './user-profile-style.scss'

const UserProfile = ({user,theme}) => {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    const profileImageStyle = {
        backgroundColor : `${getRandomColor()}`
    }
    return ( 
        <div className="d-flex align-items-center user-profile gap-1">
            <div className="profile-image d-flex justify-content-center align-items-center" style={profileImageStyle}>
                <span>{user[0].username.split('')[0]}</span>
            </div>
            <Icon icon="ic:baseline-arrow-drop-down" color={theme==='dark'? '#666' : '#f8f8f8'} width='20px' />
            <span style={theme==='dark'?{color:'#666'} : null}>
                {user[0].username}
            </span>    
        </div>
     );
}
 
export default UserProfile;