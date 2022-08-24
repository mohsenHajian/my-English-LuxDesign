import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import CategoryIcon from "../../components/categoryIcon";
import popularImg from "./popular.svg";
import "./main.style.scss";
import { useNavigate } from "react-router";
import axios from "axios";
import { BaceUrl, configAccess } from "../../servises/Urlservises";
import UserSkeleton from "../../components/Skeleton/userCardSkeleton";
import AdminSkeleton from "../../components/Skeleton/adminCardSkeleton";
import Skeleton from "react-loading-skeleton";


const Main = () => {
  const navigate = useNavigate();
  let [mainShirtSection, setMainShirtSection] = useState([]);
  let [mainPantsSection, setMainPantsSection] = useState([]);
  let [proposal, setProposal] = useState([]);


  useEffect(() => {

    axios
      .get(`${BaceUrl}63035e0ae13e6063dc86ccaf`, configAccess)
      .then(({ data }) =>
        setMainShirtSection(data.record.reverse().slice(0, 4))
      );
    axios
      .get(`${BaceUrl}63035e31a1610e638609ec2c`, configAccess)
      .then(({ data }) =>
        setMainPantsSection(data.record.reverse().slice(0, 4))
      );
    // axios
    //   .get(`${BaceUrl}63035e735c146d63ca7a4347`,configAccess)
    //   .then(({ data }) => setProposal(data.record.proposal.reverse().slice(0, 4)));
  }, []);




  const showMoreShirtsHandler = () => {
    navigate("/shirts");
  };
  const showMorePantsHandler = () => {
    navigate("/pants");
  };




  return (
    <main className="home-main">

      <section className="category-container">

        <p>دسته بندی محصولات</p>
        <div className="category-items d-flex flex-wrap">
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />

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
            data-bs-slide-to="2"
            className="active dot"
            aria-current="true"
            aria-label="Slide 3"
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
            data-bs-slide-to="0"
            aria-label="Slide 1"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6566605f496b4ba69dcd96ae0e591860aef4d024_1657954040.jpg?x-oss-process=image/quality,q_95"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ee5ae34a08b3cb6c5035adf89eff8472aba3246b_1657953346.jpg?x-oss-process=image/quality,q_95"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/36bf4f495c87e13ec707d5c0f9a8d598adb6a66b_1657954357.jpg?x-oss-process=image/quality,q_95"
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
              data-bs-slide="next"
            >
              <Icon icon="ep:arrow-right" color="#333" width="30" />
            </div>
            <div
              className="carousel-arrow"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <Icon icon="ep:arrow-left" color="#333" width="30" />
            </div>
          </div>
        </div>
      </section>



      <section className="shirt-section">

        <div className="shirt-section-header">

          <p className="shirt-section-title">پیراهن ها</p>
          <div className="show-more" onClick={showMoreShirtsHandler}>

            <span>نمایش همه</span>
            <Icon icon="akar-icons:arrow-left" color="#00bffe" width="30" />
          </div>
        </div>
        <div className="card-container d-flex justify-content-center my-4 flex-wrap w-100">
          {mainShirtSection ? mainShirtSection.map((card) => (
            <Card card={card} boxSh={true} length={25} />
          )) : <UserSkeleton />}
        </div>
      </section>

      <section className="pants-section">
        <div className="pants-section-header">
          <p className="pants-section-title">شلوار ها</p>
          <div className="show-more" onClick={showMorePantsHandler}>
            <span>نمایش همه</span>
            <Icon icon="akar-icons:arrow-left" color="#00bffe" width="30" />
          </div>
        </div>
        <div className="card-container d-flex  justify-content-center my-4 flex-wrap w-100">
          {mainPantsSection ? mainPantsSection.map((card) => (
            <Card card={card} boxSh={true} length={25} />
          )) : <UserSkeleton/>}
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
