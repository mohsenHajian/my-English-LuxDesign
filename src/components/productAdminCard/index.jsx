import React from 'react';
import './product-admin-style.scss'

const ProductAdminCard = ({card,editProductHandler,setEditProduct}) => {


    return (
        <div className="ProductAdminCard d-flex justify-content-between py-3 border-bootom">
            <div className="col-4">{card.title}</div>
            <div className="col-2">
                <button className="show-product p-2 bg-info text-white border-0 rounded-3">
                    <a href={card.imgURL}>نمایش تصویر</a>
                </button>    
            </div>
            <div className="col-2"><span className='fa-num price-product'>{card.price}تومان</span></div>
            <div className="col-1"><span className='fa-num'>{card.inventory}</span></div>
            <div className="col-1">
                <button className="edit-product p-2 bg-warning text-white border-0 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=>{setEditProduct(card);editProductHandler(card,e)}}>
                    ویرایش
                </button>
            </div>
            <div className="col-1">
                <button className="delete-product p-2 bg-danger text-white border-0 rounded-3">
                    حذف
                </button>    
            </div>
        </div>
    );
}

export default ProductAdminCard;