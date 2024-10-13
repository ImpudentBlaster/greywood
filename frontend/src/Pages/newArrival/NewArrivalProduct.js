import React from "react";
import img from "../../Assets/product-1-sample.jpg";

function NewArrivalProduct() {
  return (
    <>
      <div className="product-grid-main grid lg:grid-cols-6 sm:gap-4 gap-3  lg:gap-6 sm:grid-cols-3 grid-cols-2 ">
        
      <div className="product-card-main  justify-between flex rounded-b-xl gap-4 flex-col">
          <div className="product-card-img relative">
            <img className="rounded-xl" src={img} alt="product-card" />
            <p className="absolute top-2 right-2 text-white font-medium rounded-md bg-amber-500 text-xs px-1.5 py-0.5">
              SALE!
            </p>
          </div>
          <div className="product-card-text flex flex-col rounded-b-xl bg-transparent gap-4">
            <p
              style={{ lineHeight: "1.15rem" }}
              className="flex flex-wrap leading-none md:text-base text-gray-900 text-center font-semibold text-sm flex-1"
            >
              Kid Boys 2 Pc Stylish Romper
            </p>
            <p className="flex gap-3 px-1">
              <span className="line-through md:text-base text-xs text-gray-400">
                &#8377;10000
              </span>
              <span className="text-xs  font-semibold text-green-600 md:text-base">
                &#8377;6000
              </span>
            </p>
            <p className="text-xs md:text-sm border-b-1 bg-yellow-300 rounded-b py-1 text-center">
              Select Options
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivalProduct;
