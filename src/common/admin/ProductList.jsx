import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from '../../components/input';
import ProductAdminCard from '../../components/productAdminCard';

const ProductList = () => {
    const [productList, setProductList] = useState()
    const [pageNum, setPageNum] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [productData, setProductData] = useState()
    useEffect(() => {
        axios.get('http://localhost:8000/allProducts').then(({ data }) => { setProductList(data); setProductData(data) })
    }, [])

    const cheapestList = () => {
        let data = [...productData]
        let sortArr = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setProductList(sortArr);
    }

    const expensiveList = () => {
        let data = [...productData]
        let sortArr = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setProductList(sortArr);
    }
    useEffect(() => {
        let data = productData ? [...productData] : null
        let sortArr = data?.filter(card => card.title.includes(searchValue) ? card : null);
        setProductList(sortArr);
    }, [searchValue])


    function paginate(array, page_size, page_number) {
        return array?.slice((page_number - 1) * page_size, page_number * page_size);
    }


    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog border-0">
                    <div class="modal-content border-0">
                        <h5 className='p-3 border-bottom'>اضافه کردن محصول</h5>
                        <div className="d-flex p-3 gap-3">
                            <Input placeholder="عنوان محصول" className='w-50' icon='material-symbols:title-rounded' iconWidth='20' color='#666' />    
                            <Input placeholder="قیمت محصول" className='w-50' icon='bi:coin' iconWidth='20' color='#666' />    
                        </div>
                        <div class="modal-footer d-flex justify-content-between border-0">
                            <button type="button" class="btn btn-primary">ذخیره</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column ProductList py-3 w-100">
                <p className='ProductList-title text-center py-3 rounded-3 text-white'>لیست محصولات</p>
                <div className="d-flex gap-5">
                    <button className="add-product p-2 px-3 d-flex align-items-center gap-2 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <Icon icon="carbon:add-alt" color="#dbdbdb" width="25" />
                        <span>اضافه کردن محصول جدید</span>
                    </button>
                    <Input className='flex-grow-1' placeholder="جستجو"
                        color="#808080"
                        icon="carbon:search"
                        iconWidth="25px"
                        bgColor="#f5f5f5"
                        value={searchValue}
                        onChangeFun={setSearchValue} />
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between py-3 product-border-bootom">
                        <div className="col-4">عنوان محصول</div>
                        <div className="col-2">تصویر محصول</div>
                        <div className="col-2"><span>
                            قیمت محصول </span><Icon icon="ant-design:arrow-down-outlined" color="#666" width="25" onClick={cheapestList} cursor='pointer' /><Icon icon="ant-design:arrow-up-outlined" color="#666" width="25" onClick={expensiveList} cursor='pointer' /></div>
                        <div className="col-1"><span>موجودی</span></div>
                        <div className="col-1">ویرایش</div>
                        <div className="col-1">حذف</div>
                    </div>
                    <div className="product-border-bootom py-2">
                        {paginate(productList, 5, pageNum)?.map(card => <ProductAdminCard card={card} />)}
                    </div>
                    <div className="d-flex justify-content-center pt-3 gap-3 align-items-center">
                        <Icon icon="ant-design:arrow-right-outlined" color="#666" width="25" cursor='pointer' onClick={() => (productList?.length / 5).toFixed(0) > pageNum ? setPageNum(pageNum + 1) : null} />
                        <button className='paginate-btn border-0 p-1 px-3 rounded-3'>{pageNum}</button>
                        <Icon icon="ant-design:arrow-left-outlined" color="#666" width="25" cursor='pointer' onClick={() => pageNum !== 1 ? setPageNum(pageNum - 1) : null} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;