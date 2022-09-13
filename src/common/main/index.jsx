import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import CategoryIcon from "../../components/categoryIcon";
import "./main.style.scss";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { scrollTop } from "../../utils/scrollTop";
import pantsCategory from '../../assets/ripped-jeans-png-trendy-ripped-jeans-for-wome-11563008442nexteelelb-removebg-preview-removebg-preview.png'
import sliderOne from '../../assets/sliders/SA.jpg'
import sliderTwo from '../../assets/sliders/SA2.jpg'
import sliderthree from '../../assets/sliders/SA3.jpg'


const Main = () => {
  const navigate = useNavigate();

  // let [proposal, setProposal] = useState([]);


  const {shirtData} = useSelector(state=>state.shirtData)
  const {pantsData} = useSelector(state=>state.pantsData)


  useEffect(()=>{
    scrollTop()
  },[])


  const showMoreShirtsHandler = () => {
    navigate("/shirts");
  };
  const showMorePantsHandler = () => {
    navigate("/pants");
  };

  
  

  return (
    <main className="home-main">

      <section className="category-container">

        <p>Categories</p>
        <div className="category-items d-flex flex-wrap">
          <CategoryIcon path='/shirts' img='https://us.123rf.com/450wm/pixelrobot/pixelrobot1504/pixelrobot150401393/38286012-red-baseball-hat-with-copy-space-isolated-on-white-background-.jpg' />
          <CategoryIcon path='/shirts' img='https://dkstatics-public.digikala.com/digikala-products/a4a9d5f2fe68138420262859c9a939966f424ea8_1655723481.jpg?x-oss-process=image/resize,w_1600/quality,q_80' />
          <CategoryIcon path='/pants' img='https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?k=20&m=1249496770&s=170667a&w=0&h=UXzm1OKZBbi3fvJHnnIJisz8CRgwNNsAG4jl_KL_LmI=' />
          <CategoryIcon path='/shirts' img={pantsCategory} />
          <CategoryIcon path='/shirts' img='https://cdn11.bigcommerce.com/s-ogof3dhe/images/stencil/original/products/1004/2557/large_Anderson-School-Bobcat-Longsleeve-tShirt-Red__50073.1591037606.jpg?c=2' />

        </div>
      </section>

      <section
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators carousel-indicators-slider">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active dot"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button

            type="button"
            className="dot"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="dot"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sliderOne}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sliderTwo}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sliderthree}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <div className="carousel-control">
          <div className="carousel-control-arrow-container">
            <div
              className="carousel-arrow"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <Icon icon="ep:arrow-left" color="#333" width="30" />
            </div>
            <div
              className="carousel-arrow"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <Icon icon="ep:arrow-right" color="#333" width="30" />
            </div>
          </div>
        </div>
      </section>



      <section className="shirt-section">

        <div className="shirt-section-header">

          <p className="shirt-section-title">Shirts</p>
          <div className="show-more d-flex gap-2 align-items-center" onClick={showMoreShirtsHandler}>
            <span>More</span>
            <Icon icon="carbon:arrow-right" color="#00bffe" width="30" />
          </div>
        </div>
        <div className="card-container d-flex justify-content-center my-4 flex-wrap w-100">
          {[...shirtData].reverse().slice(0,4).map((card) => (
            <Card card={card} boxSh={true} length={25} />
          ))}
        </div>
      </section>

      <section className="pants-section">
        <div className="pants-section-header">
          <p className="pants-section-title">Pants</p>
          <div className="show-more d-flex gap-2 align-items-center" onClick={showMorePantsHandler}>
            <span>More</span>
            <Icon icon="carbon:arrow-right" color="#00bffe" width="30" />
          </div>
        </div>
        <div className="card-container d-flex  justify-content-center my-4 flex-wrap w-100">
          {[...pantsData].reverse().slice(0,4).map((card) => (
            <Card card={card} boxSh={true} length={25} />
          ))}
        </div>
      </section>

      {/* <section className="popular-product d-flex align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center popular-product-info">
          <p>پیشنهادی لوکس دیزاین</p>
          <img src={popularImg} alt="" className="popularImg" />
        </div>
        <div className="flex-grow d-flex justify-content-center proposal-cards px-5">
          {proposal?.map((card) => (
            <Card card={card} width='200px' boxSh={false} />
          ))}
        </div>
        <div className="popular-product-control d-flex justify-content-center align-items-center">
          <Icon icon="ep:arrow-left" color="#333" width="35" cursor='pointer' />
        </div>
      </section> */}
    </main>
  );
};

export default Main;
