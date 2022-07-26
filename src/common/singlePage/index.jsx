import { Icon } from "@iconify/react";
import React from "react";
import "./single-page.style.scss";

const SinglePage = () => {
  return (
    <div className="d-flex flex-column single-page-container">
      <div className="d-flex w-100">
        <div
          id="carouselExampleIndicators"
          class="carousel slide w-50"
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
                src="https://dkstatics-public.digikala.com/digikala-products/8e5f33c56085b0f8edc850c175ea7ab24ce86bac_1641904681.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
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
                src="https://dkstatics-public.digikala.com/digikala-products/06d61261c080a7dbddf2d8c2baf317a91e098e64_1641904676.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
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
                src="https://dkstatics-public.digikala.com/digikala-products/b9a5bdcec420d03fe6355ddb3d996ebf336fdc86_1641904678.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
                class="d-block w-100"
                alt="..."
              />
            </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/8e5f33c56085b0f8edc850c175ea7ab24ce86bac_1641904681.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/06d61261c080a7dbddf2d8c2baf317a91e098e64_1641904676.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/b9a5bdcec420d03fe6355ddb3d996ebf336fdc86_1641904678.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
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

        <div className="d-flex flex-column w-50 p-3">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex gap-2">
              <span className="fa-num">55</span>
              <Icon icon="bi:chat" color="#333" width="25px" />
              <span className="fa-num me-4">3.9</span>
              <Icon icon="bi:star" color="#333" width="25px" />
            </div>
            <Icon icon="ei:share-google" color="#333" width="25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
