import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCartList } from '../../redux/slice/cartListSlice';

const AddToCartIcon = ({ card }) => {
    const dispatch = useDispatch()
    const addTocart = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        dispatch(setCartList(card))
        console.log('llllllllllllllll');
    }
    return (
        <Icon icon="carbon:add-alt" color="#6c63ff" width='30px' cursor='pointer' onClick={addTocart} />
    );
}

export default AddToCartIcon;