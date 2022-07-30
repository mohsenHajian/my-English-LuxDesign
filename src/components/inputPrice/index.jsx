// import React, { PropsWithChildren, SetStateAction } from "react";
// import { useEffect, useState } from "react";
import React, { useState } from 'react';
import { Range, getTrackBackground } from "react-range";
// import { IProduct } from "../../types";



const PriceInput = () => {

  // interface ICostRange {
  //   rtl: boolean;
  //   min: number;
  //   max: number;
  //   step: number;
  //   products: IProduct[];
  //   setFilteredProducts: Function;
  //   filteredProducts: IProduct[];
  //   sortType: string;
  //   brandsFilter: string[];
  //   availability: string;
  // }

  // const CostRange: React.FC<ICostRange> = ({
  //   rtl,
  //   min,
  //   max,
  //   step,
  //   products,
  //   filteredProducts,
  //   setFilteredProducts,
  //   brandsFilter,
  //   sortType,
  //   availability,
  // }) => {
  //   const [values, setValues] = useState<number[]>([min, max]);

  //   useEffect(() => {
  //     setValues([
  //       Math.min(...products.map((product) => product.price)),
  //       Math.max(...products.map((product) => product.price)),
  //     ]);
  //   }, [products]);

  //   useEffect(() => {
  //     setFilteredProducts([
  //       ...products
  //         .filter((product) =>
  //           availability === "available" ? product.quantity > 0 : product
  //         )
  //         .filter((product) =>
  //           brandsFilter.length > 0
  //             ? brandsFilter.includes(product.brand)
  //             : product
  //         )
  //         .filter(
  //           (product) => product.price >= values[0] && product.price <= values[1]
  //         )
  //         .sort((a, b) => {
  //           if (sortType === "asc") return a.price - b.price;
  //           else if (sortType === "desc") return b.price - a.price;
  //           return 1;
  //         }),
  //     ]);
  //   }, [
  //     products,
  //     values,
  //     brandsFilter,
  //     sortType,
  //     availability,
  //     setFilteredProducts,
  //   ]);


  const [state, setState] = useState([0, 100])

  console.log(state)

  return (
    <div className='w-100 position-relative'>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={state}
          step={5000}
          min={0}
          max={500000}
          rtl={false}
          onChange={(values) => setState(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "3px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: state,
                    colors: ["#ccc", "#9c203f", "#ccc"],
                    min: 0,
                    max: 500000,
                    rtl: false,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "2rem",
                width: "2rem",
                border: "#9C203F 2px solid",
                borderRadius: "50%",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
                outline: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  top: "-35px",
                  color: "#fff",
                  fontFamily: "Vazir-FD",
                  padding: "4px",
                  borderRadius: "4px",
                  backgroundColor: "#9C203F",
                  gap: "0.25rem",
                }}
              >
                <span className="text-xs">تومان</span>
                {/* <div className="text-xs">{values[index]}</div> */}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PriceInput;