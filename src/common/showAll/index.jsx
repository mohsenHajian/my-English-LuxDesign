import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "../../components/card";
import Sidebar from "../../components/sidebar";
import { useLocation } from "react-router";
import axios from "axios";
import "./show-all.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataRender, setPantsData, setShirtData } from "../../redux/slice/dataToRenderSlice";
import { Icon } from "@iconify/react";
import { BaceUrl, configAccess } from "../../servises/Urlservises";

const ShowAll = () => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();


  const [listOfCards, setListOfCards] = useState();
  const [rootPath, setRootPath] = useState();
  const [pageNum, setPageNum] = useState(1)
  const { dataRender } = useSelector((state) => state.dataRender);
  const { shirtData } = useSelector((state) => state.shirtData);
  const { pantsData } = useSelector((state) => state.pantsData);
  const { searchSubmit } = useSelector((state) => state.searchSubmit);
  const { searchValue } = useSelector((state) => state.searchValue);

  useEffect(() => {
    switch (pathname) {
      case "/shirts":
        {
          setRootPath("فروشگاه لباس لوکس دیزاین / پیراهن ها");
          axios.get(`${BaceUrl}63035e0ae13e6063dc86ccaf`,configAccess).then(({ data }) => {
            setListOfCards(data.record.shirts);
            dispatch(setDataRender(data.record.shirts));
            dispatch(setShirtData(data.record.shirts));
          });
        }
        break;
      case "/pants":
        {
          setRootPath("فروشگاه لباس لوکس دیزاین / شلوار ها");
          axios.get(`${BaceUrl}63035e0ae13e6063dc86ccaf`,configAccess).then(({ data }) => {
            setListOfCards(data.record.pants);
            dispatch(setDataRender(data.record.pants));
            dispatch(setPantsData(data.record.pants));
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


  const cheapestList = () => {
    if (pathname === '/shirts') {
      let data = [...shirtData]
      let sortArr = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      dispatch(setDataRender(sortArr));
    } else if (pathname === '/pants') {
      let data = [...pantsData]
      let sortArr = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      dispatch(setDataRender(sortArr));
    }
  }
  const expensiveList = () => {
    if (pathname === '/shirts') {
      let data = [...shirtData]
      let sortArr = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      dispatch(setDataRender(sortArr));
    } else if (pathname === '/pants') {
      let data = [...pantsData]
      let sortArr = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      dispatch(setDataRender(sortArr));
    }
  }
  const newestList = () => {
    if (pathname === '/shirts') {
      let data = [...shirtData]
      let sortArr = data.reverse()
      dispatch(setDataRender(sortArr));
    } else if (pathname === '/pants') {
      let data = [...pantsData]
      let sortArr = data.reverse()
      dispatch(setDataRender(sortArr));
    }
  }


  function paginate(array, page_size, page_number) {
    return array?.slice((page_number - 1) * page_size, page_number * page_size);
  }


  const nextPage = () => {
    setPageNum(pageNum + 1)
  }
  const prevPage = () => {
    setPageNum(pageNum - 1)
  }




  return (
    <div className="show-all-container d-flex flex-column gap-3">
      <div className="show-all d-flex w-100 gap-4">
        <div className="d-flex flex-column col-xl-3 col-lg-12 gap-3">
          <span className="path">{rootPath}</span>
          <Sidebar />
        </div>
        <div className="d-flex flex-column col-xl-9 col-lg-12 gap-2">
          <div className="d-flex gap-3">
            <button className="btn-sort" onClick={cheapestList}>ارزان ترین</button>
            <button className="btn-sort" onClick={expensiveList}>گران ترین</button>
            <button className="btn-sort" onClick={newestList}>جدید ترین</button>
          </div>
          <div className="cards-container justify-content-end d-flex flex-wrap p-4">
            {paginate(dataRender, 8, pageNum)?.map((card) => (
              <Card key={card.id} card={card} boxSh={true} />
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 my-3">
            <button className="paginate-btn" onClick={nextPage}>
              <Icon icon="ooui:next-ltr" color="#00bffe" />
            </button>
            <span className="paginate-num"> {pageNum}</span>
            <button className="paginate-btn" onClick={prevPage}>
              <Icon icon="ooui:next-rtl" color="#00bffe" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAll;
