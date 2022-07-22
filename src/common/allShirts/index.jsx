import React from "react";
import Card from "../../components/card";
import Sidebar from "../../components/sidebar";
import "./all-shirts.style.scss";

const AllShirts = () => {
  const shirt =
    "https://dkstatics-public.digikala.com/digikala-products/964cf1684f9d778d1e5452d6fe5551a11c00dba1_1650536423.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90";

  return (
    <div className="all-shirts-container d-flex flex-column gap-3">
      <span className="path">فروشگاه لباس لوکس دیزاین / پیراهن ها</span>
      <div className="all-shirts d-flex w-100 gap-4">
        <Sidebar />
        <div className="cards-container justify-content-end d-flex flex-wrap p-4 mb-5">
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
          <Card img={shirt} boxSh={true} />
        </div>
      </div>
    </div>
  );
};

export default AllShirts;
