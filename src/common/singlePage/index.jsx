import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Comment from "../../components/comment";
import { setCartList } from "../../redux/slice/cartListSlice";
import Card from '../../components/card'
import axios from "axios";
import "./single-page.style.scss";
import { toast } from "react-toastify";
import { priceHandler } from "../../utils/priceHandler";

const SinglePage = () => {
  const dispatch = useDispatch()
  const { singlePageData } = useSelector(state => state.singlePageData)
  const { shirtData } = useSelector(state => state.shirtData)
  const { pantsData } = useSelector(state => state.pantsData)
  const [recomendedList, setRecomendedList] = useState()
  const [comment, setComment] = useState()


  const progressStyle = {
    width : `${(Number(singlePageData.star)/5)*100}%`
  }


  useEffect(() => {
    if (singlePageData.category === 'pants') {
      setRecomendedList(pantsData)
    }
    if (singlePageData.category === 'shirt') {
      setRecomendedList(shirtData)
    }
  }, [])

  const addToCart = () => {
    dispatch(setCartList(singlePageData))
  }

  const addCommentHandler = () => {
    if(comment){
      const comments = [...singlePageData.comments, {
        id: Date.now(),
        date: Date.now(),
        text: comment,
        arthor: localStorage.getItem('token')
      }]
      if (singlePageData.category === 'pants') {
        axios.put(`http://localhost:8000/pants/${singlePageData.id}`,{...singlePageData,comments})
      }
      if (singlePageData.category === 'shirt') {
        axios.put(`http://localhost:8000/shirts/${singlePageData.id}`,{...singlePageData,comments})
      }
      toast.success("نظر شما با موفقیت ثبت شد", {
        position: "top-right",
        closeOnClick: true,
    });
      setComment('')
    }else {
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true,
    });
    }
  }

  return (
    <>
      <div className="d-flex flex-column single-page-container">
        <div className="single-page-product d-flex w-100">
          <div
            id="carouselExampleIndicators"
            class="carousel slide w-50 carousel-product"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                className="active carousel-indicators-image"
                aria-current="true"
                aria-label="Slide 3"
              >
                <img
                  src={singlePageData.imgURL}
                  class="d-block w-100"
                  alt="..."
                />
              </button>
              <button
                type="button"
                className="carousel-indicators-image"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                <img
                  src={singlePageData.imgURL}
                  class="d-block w-100"
                  alt="..."
                />
              </button>
              <button
                type="button"
                className="carousel-indicators-image"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                aria-label="Slide 1"
              >
                <img
                  src={singlePageData.imgURL}
                  class="d-block w-100"
                  alt="..."
                />
              </button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={singlePageData.imgURL}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={singlePageData.imgURL}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={singlePageData.imgURL}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="single-page-details d-flex flex-column w-50 p-5">
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex gap-2">
                <span className="fa-num">{singlePageData.comments?.length}</span>
                <Icon icon="bi:chat" color="#333" width="25px" />
                <span className="fa-num me-4">{singlePageData.star}</span>
                <Icon icon="bi:star" color="#333" width="25px" />
              </div>
              <Icon icon="ei:share-google" color="#333" width="25" />
            </div>
            <h2 className="my-5">{singlePageData.title}</h2>
            <div className="d-flex w-100 justify-content-between align-items-center single-price-details mt-5">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-2">
                  <Icon icon="clarity:truck-line" color="#666" width='25px' />
                  <span>ارسال از ۲ روز کاری</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Icon icon="ant-design:safety-outlined" color="#666" width='25px' />
                  <span>گارانتی اصالت و سلامت فیزیکی کالا </span>
                </div>
              </div>
              <p className="fs-3 fa-num">{priceHandler(singlePageData.price)}تومان </p>
            </div>
            <div className="d-flex flex-column py-5 gap-3">
              <span>سایز ها:</span>

              <div className="d-flex gap-3">
                {singlePageData.property.size.map(size => <button className="size-box p-2 px-3">{size}</button>)}
              </div>
            </div>
            <div className="d-flex flex-column propertys gap-3">
              <h5 className="mb-4">ویژگی ها</h5>
              <div className="d-flex propertys-row">
                <span className="col-5 text-secondary">جنس</span>
                <span className="col-6">{singlePageData.property.material}</span>
              </div>
              <div className="d-flex propertys-row">
                <span className="col-5 text-secondary">برند</span>
                <span className="col-6">{singlePageData.property.brand}</span>
              </div>
              {singlePageData.category === 'shirt' ? (
                <>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">آستین</span>
                    <span className="col-6">{singlePageData.property.sleeve}</span>
                  </div>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">قد</span>
                    <span className="col-6">{singlePageData.property.height}</span>
                  </div>
                </>
              ) : null}
              {singlePageData.category === 'pants' ? (
                <>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">استایل</span>
                    <span className="col-6">{singlePageData.property.style}</span>
                  </div>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">فاق</span>
                    <span className="col-6">{singlePageData.property.crotch}</span>
                  </div>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">بسته شدن</span>
                    <span className="col-6">{singlePageData.property.HowToClose}</span>
                  </div>
                </>
              ) : null}

            </div>
            <button className="buy mt-5 w-100 p-3" onClick={addToCart}>افزودن به سبد خرید</button>
          </div>


        </div>
      </div>
      <div className="d-flex comments-container justify-content-between w-100">
        <div className="d-flex flex-column card-score p-4 gap-2">
          <h4>دیدگاه کاربران</h4>
          <div className="d-flex align-items-center gap-2">
            <span className="fa-num">{singlePageData.star} از 5</span>
            <Icon icon="emojione:star" width='20px' /></div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>کیفیت موارد به کار رفته</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>کیفیت دوخت</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>طراحی</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>فرم لباس روی بدن</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>ارزش خرید نسبت به قیمت</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
        </div>
        <div className="comments p-4 px-5 d-flex flex-column gap-4">
          <h4>نظرات کاربران</h4>
          {singlePageData.comments?.map(comment => <Comment comment={comment} />)}

        </div>
      </div>
      <div className="d-flex py-3 container-add-comments justify-content-between">
        <div className="add-comment d-flex flex-column p-3">
          <div className="d-flex justify-content-between mb-3">
            <span className="fs-5">ثبت نظر</span>
            <button className="add-comment-btn p-1 px-3" onClick={addCommentHandler}>ثبت</button>
          </div>
          <textarea className="p-2" placeholder="نظر خود را تایپ کنید..." value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <div className="recomended d-flex">
          {recomendedList?.slice(0, 4).map(card => <Card card={card} />)}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
