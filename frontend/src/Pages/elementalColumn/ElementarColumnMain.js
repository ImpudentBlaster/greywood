import React from "react";
import ComponentBanner from "../../Components/ComponentBanner";
import img1 from "../../Assets/elementarColumn-1.png";
import img2 from "../../Assets/elementarColumn-2.png";
import img3 from "../../Assets/elementarColumn-3.png";
function ElementarColumnMain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-10 mt-5 px-6">
      <ComponentBanner
        textLeft={"4"}
        height={"h-48"}
        buttonColor={"text-black"}
        topHeadingColor={"text-black"}
        topHeading={"All CLOTHS"}
        bodyTextColor={"text-blue-700"}
        bodyText={"WEEKEND SALE 10% - 30% OFF"}
        src={img1}
        width={"6/12"}
      />
      <ComponentBanner
        textLeft={"4"}
        height={"h-48"}
        buttonColor={"text-black"}
        topHeadingColor={"text-black"}
        topHeading={"SALE 30% OFF"}
        bodyTextColor={"text-white"}
        bodyText={"HIGH QUALITY COLLECTION"}
        src={img2}
        width={"6/12"}
      />
      <ComponentBanner
      width={"6/12"}
        textLeft={"4"}
        height={"h-48"}
        buttonColor={"text-black"}
        bodyTextColor={"text-blue-600"}
        bodyText={"On Every item You Will Get The Discount Of a 5% OFF"}
        src={img3}
      />
    </div>
  ); 
}

export default ElementarColumnMain;
