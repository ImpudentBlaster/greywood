import React from "react";
import img1 from "../../Assets/shopbycategory-kid-boys.png";
import img2 from "../../Assets/shopbycategory-kid-girls.png";
import img3 from "../../Assets/shopbycategory-men.png";
import img4 from "../../Assets/shopbycategory-women.png";

function ShopbycategoryGrid() {
  return (
    <>
      <div className="shopbycategory-main">
        <div className="category-card-main grid lg:grid-cols-4 grid-cols-2 gap-6 ">
          <div className="category-card-main ">
            <div className="category-card-image">
              <img className="rounded-2xl" src={img1} alt="category img" />
            </div>
            <div className="category-card-text">
              <p></p>
            </div>
          </div>
          <div className="category-card-main">
            <div className="category-card-image">
              <img className="rounded-2xl" src={img2} alt="category img" />
            </div>
            <div className="category-card-text">
              <p></p>
            </div>
          </div>

          <div className="category-card-main">
            <div className="category-card-image">
              <img className="rounded-2xl" src={img3} alt="category img" />
            </div>
            <div className="category-card-text">
              <p></p>
            </div>
          </div>

          <div className="category-card-main">
            <div className="category-card-image">
              <img className="rounded-2xl" src={img4} alt="category img" />
            </div>
            <div className="category-card-text">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopbycategoryGrid;
