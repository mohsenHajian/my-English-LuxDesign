import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setDataRender } from "../../redux/slice/dataToRenderSlice";
import PriceInput from "../inputPrice";
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
        <h4>Filters</h4>
        {pathname === "/shirts" ? (
          <>
            <select
              value={sleeve}
              onChange={(e) => modelsHandler(e.target.value)}
              className="select"
            >
              <option value="allSleeve" selected>
                Styles
              </option>
              <option value="Tall">Long Sleeve</option>
              <option value="Short">Short Sleeve</option>
            </select>
            <select
              value={shirtBrand}
              onChange={(e) => brandHandler(e.target.value)}
              className="select"
            >
              <option value="allBrand" selected>
                Brands
              </option>
              <option value="London Market">London Market</option>
              <option value="LC Man">LC Man</option>
              <option value="Zisa">Zisa</option>
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
                Styles
              </option>
              <option value="straight">straight pants</option>
              <option value="tight-fitting">tight pants</option>
            </select>
            <select value={pantsBrand} onChange={(e) => brandHandler(e.target.value)} className="select">
              <option value='allBrand' selected>Brands</option>
              <option value="Exatres">Exatres</option>
              <option value="LC Man">LC Man</option>
              <option value="Sidona">Sidona</option>
              <option value="Reiki">Reiki</option>
              <option value="patten">patten</option>
              <option value="Dian">Dian</option>
            </select>
          </>
        ) : null}
        <div className="form-check form-switch px-0 py-4 d-flex justify-content-between border-bottom">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Only available products
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
        {/* <PriceInput /> */}
      </div>
    </aside>
  );
};

export default Sidebar;
