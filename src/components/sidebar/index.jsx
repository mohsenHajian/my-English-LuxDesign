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
  const [sleeve, setSleeve] = useState();
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

  return (
    <aside className="aside d-flex flex-column">
      <div className="boxSh p-4 d-flex flex-column">
        <h4 onClick={() => {console.log('pantsData',pantsData);console.log('shirtData',shirtData)}}>فیلتر ها</h4>
        {pathname === "/shirts" ? (
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
        ) : null}
        {pathname === "/pants" ? (
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
        ) : null}
        <select className="select">
          <option selected>برند</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
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
        <PriceInput />
      </div>
    </aside>
  );
};

export default Sidebar;
