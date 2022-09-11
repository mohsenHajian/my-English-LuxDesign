import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo, setUserToken } from '../../redux/slice/userTokenSlice';
import './user-profile-style.scss'
import { withCookies, Cookies } from 'react-cookie';
import PropTypes from 'prop-types'
import { memo } from "react";

const UserProfile = ({ cookies, theme }) => {
    const dispatch = useDispatch()

    let user = cookies.get('token')

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



    const profileImageStyle = {
        backgroundColor: `${getRandomColor()}`
    }



    const logoutHandler = () => {
        cookies.remove('token')
        dispatch(setUserToken(''))
        dispatch(setUserInfo([]))
    }







    return (
        <div className="d-flex align-items-center user-profile gap-1">
            <div className="profile-image d-flex justify-content-center align-items-center" style={profileImageStyle}>
            <span>{user?.split('')[0]}</span>
            </div>
            <div class="dropdown">
                <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <Icon icon="ic:baseline-arrow-drop-down" color={theme === 'dark' ? '#666' : '#f8f8f8'} width='20px' />
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#" onClick={()=>logoutHandler()}>خروج از حساب کاربری</a></li>
                </ul>
            </div>
            <span className='user-profile-name' style={theme === 'dark' ? { color: '#666' } : null}>
            {user?.replace(/[0-9]/g, '')}
            </span>
        </div>
    );
}

UserProfile.propTypes = {
    cookies: PropTypes.instanceOf(Cookies)
};

export default memo(withCookies(UserProfile));




