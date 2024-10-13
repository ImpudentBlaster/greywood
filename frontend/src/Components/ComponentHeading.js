import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function ComponentHeading({ mainHeading, viewMoreButton }) {
  return (
    <>
      <div className="border-b-4 gap-1 border-grey-500 flex items-center justify-between w-full pb-0.5">
        <p className="font-bold text-black sm:text-lg text-sm">{mainHeading}</p>
        <p className="flex gap-2 items-center text-xs font-medium text-gray-600  ">
          {viewMoreButton} <FaLongArrowAltRight />
        </p>
      </div>
    </>
  );
}

export default ComponentHeading;
