import React from "react";
import ComponentBanner from "../../Components/ComponentBanner";
import img1 from "../../Assets/bottomBanner-1.png";
import img2 from "../../Assets/bottomBanner-2.png";
function BottomBannerMain() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-10 mt-5 px-6">
      <div className="sm:col-span-2">
        <ComponentBanner
          textLeft={"1/4"}
          buttonColor={"text-white"}
          topHeadingColor={"text-white"}
          bodyTextColor={"text-white"}
          bodyText={"ALL TYPE OF CLOTHES"}
          topHeading={"SALE UPTO 35% ON SUMMER SALE!"}
          textAlignment={"items-center"}
          height={"h-28"}
          src={img1}
        />
      </div>
      <div>
        <ComponentBanner
          textLeft={"4"}
          buttonColor={"text-white"}
          bodyTextColor={"text-white"}
          bodyText={"BUY NOW"}
          height={"h-28"}
          src={img2}
        />
      </div>
    </div>
  );
}

export default BottomBannerMain;
