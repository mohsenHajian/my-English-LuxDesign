import React from "react";
import "./footer.style.scss";
import logo from "../../assets/logo-removebg-preview.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="d-flex w-100 flex-column">
      <div className="d-flex justify-content-between w-100 footer-header">
        <div className="d-flex flex-column gap-2">
          <span>مشاوره و رفع مشکل آنلاین</span>
          <span>درخواست همکاری با لوکس دیزاین</span>
          <span>فروشگاه های لوکس دیزاین</span>
          <span>درباره ما</span>
        </div>
        <div className="d-flex flex-column gap-2">
          <span>جدیدترین کالاهای لوکس دیزاین</span>
          <span>دوره های پیشنهادی</span>
          <span>دوره های محبوب</span>
          <span>مدارک</span>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center pt-5 pb-2 gap-3">
          <Icon icon="ph:instagram-logo-thin" color="#f6f6f6" width="40px" />
          <Icon icon="arcticons:twitter" color="#f6f6f6" width="40px" />
          <Icon icon="ph:telegram-logo-thin" color="#f6f6f6" width="40px" />
          <Icon icon="uit:facebook-f" color="#f6f6f6" width="40px" />
        </div>
        <p className="text-center">بزرگترین فروشگاه لباس با متنوع ترین طرح های جدید لوکس دیزاین</p>
      </div>
    </footer>
  );
};

export default Footer;
