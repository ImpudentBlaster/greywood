import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


function ComponentBanner(props) {
  console.log(props)
  return (
    <div className={`ComponentBanner-main flex items-center ${props.height} relative rounded-lg`}>
      <img className="h-full w-full object-cover rounded-lg" src={props.src} alt="elementarColumn img"/>
      <div className={`sm:left-${props.textLeft} left-4 ComponentBanner-text flex flex-col sm:h-6/12 gap-2 w-${props.width} absolute ${props.textAlignment}`}>
        <p className={`font-medium text-[13px] ${props.topHeadingColor}`}>{props.topHeading}</p>
        <p className={`text-lg ${props.bodyTextColor} font-semibold`}>{props.bodyText}</p>
        <p className={`flex gap-2 items-center text-[11px] font-medium ${props.buttonColor}`}>
          SHOP NOW <FaLongArrowAltRight />
        </p>
      </div>
    </div>
  );
}

export default ComponentBanner;
