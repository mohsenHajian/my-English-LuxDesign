import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setDataRender } from "../../redux/slice/dataToRenderSlice";
import "./sidebar-style.scss";

const Sidebar = () => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

  let filterdModelsCard;
  let filterBrandCards;
  const [sleeve, setSleeve] = useState();
  const [shirtBrand, setShirtBrand] = useState();
  const [pantsBrand, setPantsBrand] = useState();
  const [pantsStyle, setPantsStyle] = useState();
  const { shirtData } = useSelector((state) => state.shirtData);
  const { pantsData } = useSelector((state) => state.pantsData);

  const modelsHandler = (value) => {
    if (pathname === "/shirts") {
      setSleeve(value);
      if (value !== "allSleeve") {
        filterdModelsCard = shirtData.filter((card) =>
          card.property.sleeve.includes(value) ? card : null
        );
      } else if (value === "allSleeve") {
        filterdModelsCard = shirtData;
      }
    }
    if (pathname === "/pants") {
      setPantsStyle(value);
      if (value !== "allSleeve") {
        filterdModelsCard = pantsData.filter((card) =>
          card.property.style.includes(value) ? card : null
        );
      } else if (value === "allSleeve") {
        filterdModelsCard = pantsData;
      }
    }
    return filterdModelsCard
      ? dispatch(setDataRender(filterdModelsCard))
      : null;
  };


  const brandHandler = (value) => {
    if(pathname === '/shirts'){
      setShirtBrand(value)
      if (value !== "allBrand") {
        filterBrandCards = shirtData.filter((card) =>
          card.property.brand.includes(value) ? card : null
        );
      } else if (value === "allBrand") {
        filterBrandCards = shirtData;
      }
    }
    if(pathname === '/pants'){
      setPantsBrand(value)
      if (value !== "allBrand") {
        filterBrandCards = pantsData.filter((card) =>
          card.property.brand.includes(value) ? card : null
        );
      } else if (value === "allBrand") {
        filterBrandCards = pantsData;
      }
    }
    return filterBrandCards
    ? dispatch(setDataRender(filterBrandCards))
    : null;
  }


  return (
    <aside className="aside d-flex flex-column">
      <div className="boxSh p-4 d-flex flex-column">
        <h4>فیلتر ها</h4>
        {pathname === "/shirts" ? (
          <>
            <select
              value={sleeve}
              onChange={(e) => modelsHandler(e.target.value)}
              className="select"
            >
              <option value="allSleeve" selected>
                همه مدل
              </option>
              <option value="بلند">آستین بلند</option>
              <option value="کوتاه">آستین کوتاه</option>
            </select>
            <select
              value={shirtBrand}
              onChange={(e) => brandHandler(e.target.value)}
              className="select"
            >
              <option value="allBrand" selected>
                همه برند
              </option>
              <option value="ایران لباس">ایران لباس</option>
              <option value="ال سی من">ال سی من</option>
              <option value="زیسا">زیسا</option>
            </select>
          </>
        ) : null}
        {pathname === "/pants" ? (
          <>
            <select
              value={pantsStyle}
              onChange={(e) => modelsHandler(e.target.value)}
              className="select"
            >
              <option value="allSleeve" selected>
                همه مدل
              </option>
              <option value="راسته">راسته</option>
              <option value="جذب">جذب</option>
            </select>
            <select value={pantsBrand} onChange={(e) => brandHandler(e.target.value)} className="select">
              <option value='allBrand' selected>همه برند ها</option>
              <option value="اکزاترس">اکزاترس</option>
              <option value="ال سی من">ال سی من</option>
              <option value="سیدونا">سیدونا</option>
              <option value="راکی">راکی</option>
              <option value="پاتن">پاتن</option>
              <option value="دیان">دیان</option>
            </select>
          </>
        ) : null}
        <div className="form-check form-switch py-4 border-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            فقط کالا های موجود
          </label>
        </div>
        {/* <PriceInput /> */}
      </div>
    </aside>
  );
};

export default Sidebar;
