import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/input';
import ProductAdminCard from '../../components/productAdminCard';
import AdminSkeleton from '../../components/Skeleton/adminCardSkeleton';
import { BaceUrl, configAccess, configMaster } from '../../servises/Urlservises';


const ProductList = () => {
    const [productList, setProductList] = useState()
    const [pageNum, setPageNum] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [productData, setProductData] = useState()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [inventory, setInventory] = useState()
    const [brand, setBrand] = useState()
    const [imgURL, setImgURL] = useState()
    const [category, setCategory] = useState('shirt')
    const [material, setMaterial] = useState()
    const [size, setSize] = useState()
    const [comments, setComments] = useState()
    const [sleeve, setSleeve] = useState()
    const [height, setHeight] = useState()
    const [crotch, setCrotch] = useState()
    const [style, setStyle] = useState()
    const [selectedProduct, setSelectedProduct] = useState()
    const [editProduct, setEditProduct] = useState()
    const [addProductModal,setAddProductModal] = useState(false)
    const [showProduct,setShowProduct] = useState(false)
    const [shirtData , setShirtData] = useState()
    const [pantsData , setPantsData] = useState()


    useEffect(() => {
        axios.get(`${BaceUrl}63035e0ae13e6063dc86ccaf`, configAccess).then(({ data }) => { setShirtData(data.record) })
        axios.get(`${BaceUrl}63035e31a1610e638609ec2c`, configAccess).then(({ data }) => { setPantsData(data.record) })
        axios.get(`${BaceUrl}63035de35c146d63ca7a4297`, configAccess).then(({ data }) => { setProductList(data.record); setProductData(data.record) })
    }, [selectedProduct])



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


    const resetState = (value) => {
        setTitle(value)
        setPrice(value)
        setBrand(value)
        setCategory(value)
        setCrotch(value)
        setHeight(value)
        setInventory(value)
        setImgURL(value)
        setMaterial(value)
        setSize(value)
        setStyle(value)
        setSleeve(value)
        setEditProduct(value)

    }


    const objReplacer = (data,product) => {
        let arr = data.map(card => card.id === product.id ? card = product : card)
        return arr
    }
    const objRemover = (data,product) => {
        let arr = data.filter(item => item.id !== product.id ? item : null)
        return arr
    }


    const addProductHandler = () => {
        if (title && price && brand && category && inventory && imgURL && material && size) {

            if (category === 'shirt') {
                let product = {
                    id: Date.now(),
                    category,
                    title,
                    imgURL,
                    price,
                    inventory,
                    star: '3',
                    property: {
                        material,
                        size: size.split('-'),
                        sleeve,
                        height,
                        brand
                    },
                    comments: [
                        {
                            arthor: "mohsen",
                            date: 1600000000,
                            text: "این کامنت از طرف محسن حاجیان است",
                            id: "1600000000"
                        },
                        {
                            arthor: "mohsen",
                            date: 1600000000,
                            text: "این کامنت از طرف محسن حاجیان است",
                            id: "1600000000"
                        },
                        {
                            arthor: "mohsen",
                            date: 1600000000,
                            text: "این کامنت از طرف محسن حاجیان است",
                            id: "1600000000"
                        }
                    ]
                }
                axios.put(`${BaceUrl}63035de35c146d63ca7a4297` , [...productData , product] , configMaster)
                axios.put(`${BaceUrl}63035e0ae13e6063dc86ccaf` , [...shirtData , product] , configMaster)
                toast.success("محصول با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: true,
                });
                setSelectedProduct(product)
                resetState(undefined)
            }
            if (category === 'pants') {
                let product = {
                    id: Date.now(),
                    category,
                    title,
                    imgURL,
                    price,
                    inventory,
                    star: '3',
                    property: {
                        material,
                        size: size.split('-'),
                        crotch,
                        style,
                        brand,
                        HowToClose : 'دکمه و زیپ'
                    },
                    comments: [
                        {
                            arthor: "mohsen",
                            date: 1600000000,
                            text: "این کامنت از طرف محسن حاجیان است",
                            id: "1600000000"
                        },
                        {
                            arthor: "mohsen",
                            date: 1600000000,
                            text: "این کامنت از طرف محسن حاجیان است",
                            id: "1600000000"
                        },
                        {
                            arthor: "mohsen",
                            date: 1600000000,
                            text: "این کامنت از طرف محسن حاجیان است",
                            id: "1600000000"
                        }
                    ]
                }
                axios.put(`${BaceUrl}63035de35c146d63ca7a4297` , objReplacer(productData,product) , configMaster)
                axios.put(`${BaceUrl}63035e31a1610e638609ec2c` , [...pantsData , objReplacer(productData,product)], configMaster)
                toast.success("محصول با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: true,
                });
                setSelectedProduct(product)
                resetState(undefined)
            }
        } else {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true,
            });
        }
        setAddProductModal(false)
    }



    const editProductHandler = (card, e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setTitle(card.title)
        setPrice(card.price)
        setInventory(card.inventory)
        setImgURL(card.imgURL)
        setCategory(card.category)
        setBrand(card.property.brand)
        setMaterial(card.property.material)
        setSize(card.property.size.join('-'))
        setComments(card.comments)
        if (card.category === 'shirt') {
            setSleeve(card.property.sleeve)
            setHeight(card.property.height)
        }
        if (card.category === 'pants') {
            setStyle(card.property.style)
            setCrotch(card.property.crotch)
        }
    }

    const submitEditHandler = () => {
        if (title && price && brand && category && inventory && imgURL && material && size) {

            if (category === 'shirt') {
                let product = {
                    id: editProduct.id,
                    category,
                    title,
                    imgURL,
                    price,
                    inventory,
                    star: '3',
                    property: {
                        material,
                        size: size.split('-'),
                        sleeve,
                        height,
                        brand
                    },
                    comments
                }
                axios.put(`${BaceUrl}63035de35c146d63ca7a4297` , objReplacer(productData,product) , configMaster)
                axios.put(`${BaceUrl}63035e0ae13e6063dc86ccaf` , objReplacer(shirtData,product) , configMaster)
                toast.success("محصول با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: true,
                });
                setSelectedProduct(product)
                resetState(undefined)
            }
            if (category === 'pants') {
                let product = {
                    id: editProduct.id,
                    category,
                    title,
                    imgURL,
                    price,
                    inventory,
                    star: '3',
                    property: {
                        material,
                        size: size.split('-'),
                        crotch,
                        style,
                        brand,
                        HowToClose : 'دکمه و زیپ'
                    },
                    comments
                }
                axios.put(`${BaceUrl}63035de35c146d63ca7a4297` , objReplacer(productData,product) , configMaster)
                axios.put(`${BaceUrl}63035e31a1610e638609ec2c` , objReplacer(pantsData,product) , configMaster)
                toast.success("محصول با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: true,
                });
                setSelectedProduct(product)
                resetState(undefined)
            }
        } else {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true,
            });
        }
    }



    const deleteHandler = () => {
        axios.put(`${BaceUrl}63035de35c146d63ca7a4297`, objRemover(productData,editProduct) , configMaster)
        if (editProduct.category === 'shirt') axios.put(`${BaceUrl}63035e0ae13e6063dc86ccaf`, objRemover(shirtData,editProduct) , configMaster)
        if (editProduct.category === 'pants') axios.put(`${BaceUrl}63035e31a1610e638609ec2c`, objRemover(pantsData,editProduct), configMaster)
        setSelectedProduct(productList)
        toast.success("محصول با موفقیت حذف شد", {
            position: "top-right",
            closeOnClick: true,
        });
    }



    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog border-0">
                    <div class="modal-content border-0">
                        <h5 className='p-3 border-bottom'>{editProduct ? 'ویرایش محصول' : 'اضافه کردن محصول'}</h5>
                        <div className="d-flex px-3 gap-3 pt-3">
                            <Input placeholder="عنوان محصول" className='w-50' validation={title === '' ? 'لطفا فیلد را پر کنید' : null} value={!title ? '' : title} onChangeFun={setTitle} icon='material-symbols:title-rounded' iconWidth='20' color='#666' />
                            <Input placeholder="قیمت محصول" className='w-50' validation={price === '' ? 'لطفا فیلد را پر کنید' : null} value={!price ? '' : price} onChangeFun={setPrice} icon='bi:coin' iconWidth='20' color='#666' />
                        </div>
                        <div className="d-flex px-3 gap-3">
                            <Input placeholder="موجودی" className='w-50' validation={inventory === '' ? 'لطفا فیلد را پر کنید' : null} value={!inventory ? '' : inventory} onChangeFun={setInventory} icon='ic:outline-inventory-2' type='number' iconWidth='20' color='#666' />
                            <Input placeholder="برند محصول" className='w-50' validation={brand === '' ? 'لطفا فیلد را پر کنید' : null} value={!brand ? '' : brand} onChangeFun={setBrand} icon='icon-park-outline:engineering-brand' iconWidth='20' color='#666' />
                        </div>
                        <div className="d-flex px-3 gap-3">
                            <Input placeholder="لینک عکس" className='w-50' validation={imgURL === '' ? 'لطفا فیلد را پر کنید' : null} value={!imgURL ? '' : imgURL} onChangeFun={setImgURL} icon='bi:card-image' iconWidth='20' color='#666' />
                            <select className="h-100 w-50 select-add-product" validation={category === '' ? 'لطفا فیلد را پر کنید' : null} value={!category ? '' : category} onChange={(e) => setCategory(e.target.value)}>
                                <option value='shirt'>پیراهن</option>
                                <option value="pants">شلوار</option>
                            </select>
                        </div>
                        <div className="d-flex px-3 gap-3">
                            <Input placeholder="جنس محصول" className='w-50' validation={material === '' ? 'لطفا فیلد را پر کنید' : null} value={!material ? '' : material} onChangeFun={setMaterial} icon='icon-park-outline:material-three' iconWidth='20' color='#666' />
                            <Input placeholder="سایز محصول (xl-m-s...46-42-40)" className='w-50' validation={size === '' ? 'لطفا فیلد را پر کنید' : null} value={!size ? '' : size} onChangeFun={setSize} icon='cil:resize-both' iconWidth='20' color='#666' />
                        </div>
                        {category === 'shirt' ? (
                            <div className="d-flex px-3 gap-3">
                                <Input placeholder="آستین محصول" className='w-50' validation={sleeve === '' ? 'لطفا فیلد را پر کنید' : null} value={!sleeve ? '' : sleeve} onChangeFun={setSleeve} icon='icon-park-outline:clothes-short-sleeve' iconWidth='20' color='#666' />
                                <Input placeholder="قد پیراهن" className='w-50' validation={height === '' ? 'لطفا فیلد را پر کنید' : null} value={!height ? '' : height} onChangeFun={setHeight} icon='cil:resize-both' iconWidth='20' color='#666' />
                            </div>
                        ) : null}
                        {category === 'pants' ? (
                            <div className="d-flex px-3 gap-3">
                                <Input placeholder="استایل شلوار" className='w-50' validation={style === '' ? 'لطفا فیلد را پر کنید' : null} value={!style ? '' : style} onChangeFun={setStyle} icon='iconoir:pants-alt' iconWidth='20' color='#666' />
                                <Input placeholder="فاق شلوار" className='w-50' validation={crotch === '' ? 'لطفا فیلد را پر کنید' : null} value={!crotch ? '' : crotch} onChangeFun={setCrotch} icon='iconoir:pants-alt' iconWidth='20' color='#666' />
                            </div>
                        ) : null}
                        <div className="modal-footer d-flex justify-content-between border-0">
                            {editProduct || addProductModal ? <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={editProduct ? submitEditHandler : addProductHandler}>ذخیره</button> : null }
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => resetState(undefined)}>بستن</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalDelete" tabindex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-delete border-0">
                    <div className="modal-content border-0">
                        <h5 className='p-3'>آیا از حذف این محصول اطمینان دارید؟</h5>
                        <div className="modal-footer d-flex justify-content-between border-0">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteHandler}>حذف</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => resetState(undefined)}>بستن</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column ProductList py-3 w-100">
                <p className='ProductList-title text-center py-3 rounded-3 text-white'>لیست محصولات</p>
                <div className="d-flex gap-5">
                    <button className="add-product p-2 px-3 d-flex align-items-center gap-2 rounded-3" onClick={()=>setAddProductModal(true)} data-bs-toggle="modal" data-bs-target="#exampleModal" >
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
                        <div className="col-1">نمایش</div>
                    </div>
                    <div className="product-border-bootom py-2">
                        {productList ? paginate(productList, 5, pageNum).map(card => <ProductAdminCard key={card.id} card={card} editProductHandler={editProductHandler} setEditProduct={setEditProduct} setShowProduct={setShowProduct} />) : <AdminSkeleton />}
                    </div>
                    <div className="d-flex justify-content-center pt-3 gap-3 align-items-center">
                        <Icon icon="ant-design:arrow-right-outlined" color="#666" width="25" cursor='pointer' onClick={() => Math.ceil(productList?.length / 5) > pageNum ? setPageNum(pageNum + 1) : null} />
                        <button className='paginate-btn border-0 p-1 px-3 rounded-3'>{pageNum}</button>
                        <Icon icon="ant-design:arrow-left-outlined" color="#666" width="25" cursor='pointer' onClick={() => pageNum !== 1 ? setPageNum(pageNum - 1) : null} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;