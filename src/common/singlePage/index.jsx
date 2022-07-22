import { Icon } from "@iconify/react";
import React from "react";

const SinglePage = () => {
  return (
    <div className="d-flex flex-column single-page-container">
      <div className="d-flex w-100">
        <img
          src="https://dkstatics-public.digikala.com/digikala-products/9d51e39332db991c0515ed3bf1505565b1150e7f_1641904683.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
          alt=""
          className="w-50"
        />
        <div className="d-flex flex-column w-50">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex">
              <span className="fa-num">55</span>
              <Icon icon="bi:chat" color="#333" width="25px" />
              <span className="fa-num">3.9</span>
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
