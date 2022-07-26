import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "../../components/card";
import Sidebar from "../../components/sidebar";
import { useLocation } from "react-router";
import axios from "axios";
import "./show-all.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataRender, setPantsData, setShirtData } from "../../redux/slice/dataToRenderSlice";

const ShowAll = () => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();


  const [listOfCards, setListOfCards] = useState();
  const [rootPath, setRootPath] = useState();
  const { dataRender } = useSelector((state) => state.dataRender);
  const { searchSubmit } = useSelector((state) => state.searchSubmit);
  const { searchValue } = useSelector((state) => state.searchValue);

  useEffect(() => {
    switch (pathname) {
      case "/shirts":
        {
          setRootPath("فروشگاه لباس لوکس دیزاین / پیراهن ها");
          axios.get("http://localhost:8000/shirts/").then(({ data }) => {
            setListOfCards(data.products);
            dispatch(setDataRender(data.products));
            dispatch(setShirtData(data.products));
          });
        }
        break;
      case "/pants":
        {
          setRootPath("فروشگاه لباس لوکس دیزاین / شلوار ها");
          axios.get("http://localhost:8000/pants/").then(({ data }) => {
            setListOfCards(data.products);
            dispatch(setDataRender(data.products));
            dispatch(setPantsData(data.products));
          });
        }
        break;
    }
  }, []);

  useEffect(() => {
    let searchList = listOfCards?.filter((card) =>
      card.title.includes(searchValue) ? card : null
    );
    if (searchList) {
      dispatch(setDataRender(searchList));
    }
  }, [searchSubmit]);


  return (
    <div className="show-all-container d-flex flex-column gap-3">
      <span className="path" onClick={()=>console.log(dataRender)}>{rootPath}</span>
      <div className="show-all d-flex w-100 gap-4">
        <Sidebar />
        <div className="cards-container justify-content-end d-flex flex-wrap p-4 mb-5">
          {dataRender?.map((card) => (
            <Card key={card.id} card={card} boxSh={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAll;
