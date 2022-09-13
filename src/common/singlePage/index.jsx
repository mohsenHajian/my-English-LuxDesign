import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Comment from "../../components/comment";
import { setCartList } from "../../redux/slice/cartListSlice";
import Card from '../../components/card'
import axios from "axios";
import "./single-page.style.scss";
import { toast } from "react-toastify";
import { priceHandler } from "../../utils/priceHandler";
import { BaceUrl, configMaster } from "../../servises/Urlservises";
import { setCommentStatus, setPantsData, setShirtData, setSinglePageData } from "../../redux/slice/dataToRenderSlice";
import { scrollTop } from "../../utils/scrollTop";
import { setProgress } from "../../redux/slice/loadingbarSlice";

const SinglePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { singlePageData } = useSelector(state => state.singlePageData)
  const { allData } = useSelector(state => state.allData)
  const { shirtData } = useSelector(state => state.shirtData)
  const { pantsData } = useSelector(state => state.pantsData)
  const { userInfo } = useSelector(state => state.userInfo)
  const { userToken } = useSelector(state => state.userToken)
  const { commentStatus } = useSelector(state => state.commentStatus)
  const [recomendedList, setRecomendedList] = useState()
  const [comment, setComment] = useState()


  const progressStyle = {
    width: `${(Number(singlePageData.star) / 5) * 100}%`
  }


  useEffect(() => {
    if (singlePageData.category === 'pants') {
      setRecomendedList(pantsData)
    }
    if (singlePageData.category === 'shirt') {
      setRecomendedList(shirtData)
    }
    scrollTop()
  }, [])

  const addToCart = () => {
    dispatch(setCartList(singlePageData))
  }

  const arrayUpdater = (array, oldObj, newObj) => {
    let newData = array.map(item => item.id === oldObj.id ? item = newObj : item)
    return newData
  }

  const addCommentHandler = () => {
    if (userToken) {
      if (comment) {
        dispatch(setProgress(20))
        dispatch(setCommentStatus('pending'))
        const comments = [{
          id: Date.now(),
          date: Date.now(),
          text: comment,
          arthor: userInfo[0].username
        }, ...singlePageData.comments]
        if (singlePageData.category === 'pants') {
          axios.put(`${BaceUrl}63035e31a1610e638609ec2c`, arrayUpdater(pantsData, { ...singlePageData }, { ...singlePageData, comments }), configMaster)
        }
        if (singlePageData.category === 'shirt') {
          axios.put(`${BaceUrl}63035e0ae13e6063dc86ccaf`, arrayUpdater(shirtData, { ...singlePageData }, { ...singlePageData, comments }), configMaster)
        }
        axios.put(`${BaceUrl}63035de35c146d63ca7a4297`, arrayUpdater(allData, { ...singlePageData }, { ...singlePageData, comments }), configMaster).then((data) => {
          if (data.status === 200) {
            toast.success("Your comment has been successfully registered", {
              position: "top-left",
              closeOnClick: true,
            });
            dispatch(setSinglePageData({ ...singlePageData, comments }))
            dispatch(setProgress(100))
            dispatch(setCommentStatus(''))
            setComment('')
          }
        })
      } else {
        toast.error("Please write your comment", {
          position: "top-left",
          closeOnClick: true,
        });
      }
    } else {
      navigate('/login')
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
                <span className="fa-num ms-4">{singlePageData.star}</span>
                <Icon icon="bi:star" color="#333" width="25px" />
              </div>
              <Icon icon="ei:share-google" color="#333" width="25" />
            </div>
            <h2 className="my-5">{singlePageData.title}</h2>
            <div className="d-flex w-100 justify-content-between align-items-center single-price-details mt-5">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-2">
                  <Icon icon="clarity:truck-line" color="#666" width='25px' />
                  <span>Shipping from 2 working days</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Icon icon="ant-design:safety-outlined" color="#666" width='25px' />
                  <span>Guarantee of authenticity and physical health of products</span>
                </div>
              </div>
              <p className="fs-3 fa-num">{priceHandler(singlePageData.price)} $</p>
            </div>
            <div className="d-flex flex-column py-5 gap-3">
              <span>Sizes:</span>

              <div className="d-flex gap-3">
                {singlePageData.property.size.map(size => <button className="size-box p-2 px-3">{size}</button>)}
              </div>
            </div>
            <div className="d-flex flex-column propertys gap-3">
              <h5 className="mb-4">Property</h5>
              <div className="d-flex propertys-row">
                <span className="col-5 text-secondary">material</span>
                <span className="col-6">{singlePageData.property.material}</span>
              </div>
              <div className="d-flex propertys-row">
                <span className="col-5 text-secondary">brand</span>
                <span className="col-6">{singlePageData.property.brand}</span>
              </div>
              {singlePageData.category === 'shirt' ? (
                <>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">sleeve</span>
                    <span className="col-6">{singlePageData.property.sleeve}</span>
                  </div>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">height</span>
                    <span className="col-6">{singlePageData.property.height}</span>
                  </div>
                </>
              ) : null}
              {singlePageData.category === 'pants' ? (
                <>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">style</span>
                    <span className="col-6">{singlePageData.property.style}</span>
                  </div>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">crotch</span>
                    <span className="col-6">{singlePageData.property.crotch}</span>
                  </div>
                  <div className="d-flex propertys-row">
                    <span className="col-5 text-secondary">HowToClose</span>
                    <span className="col-6">{singlePageData.property.HowToClose}</span>
                  </div>
                </>
              ) : null}

            </div>
            <button className="buy mt-5 w-100 p-3" onClick={addToCart}>Add to Cart</button>
          </div>


        </div>
      </div>
      <div className="d-flex comments-container justify-content-between w-100">
        <div className="d-flex flex-column card-score p-4 gap-2">
          <h4>User opinion</h4>
          <div className="d-flex align-items-center gap-2">
            <span className="fa-num">{singlePageData.star} from 5</span>
            <Icon icon="emojione:star" width='20px' /></div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>The quality of the items used</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>Sewing quality</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>Designing</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>The form of clothing on the body</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
          <div className="score-progress d-flex flex-column my-2 gap-1">
            <span>Value for money compared to the price</span>
            <div className="progress-container">
              <div className="progress" style={progressStyle}></div>
            </div>
          </div>
        </div>
        <div className="comments p-4 px-5 d-flex flex-column gap-4">
          <h4>Comments</h4>
          {singlePageData.comments?.map(comment => <Comment comment={comment} />)}

        </div>
      </div>
      <div className="d-flex py-3 container-add-comments justify-content-between">
        <div className="add-comment d-flex flex-column p-3">
          <div className="d-flex justify-content-between mb-3">
            <span className="fs-5">Add Comments</span>
            <button className="add-comment-btn p-1 px-3" onClick={addCommentHandler}>Submit{commentStatus === 'pending' ? (
              <div className="add-comment-loading w-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : null}</button>
          </div>
          <textarea className="p-2" placeholder="Type your comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <div className="recomended d-flex">
          {recomendedList?.slice(0, 4).map(card => <Card card={card} length={15} />)}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
