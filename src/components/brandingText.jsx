import React from "react";

export default function BrandingText({ heading, hide }) {
  return (
    <div className="positivity">
      <span
        className={`positivity__alone ${heading} !font-neue lg:!font-helvetica font-[500]  text-[16px] lg:text-[20px] !text-black   ${
          !hide ? "lg:!text-white" : "lg:!text-black"
        }`}
      >
        Branding{" "}
        <span
          className={` !font-neue lg:!font-helvetica ${
            !hide ? "text-[#eec627]" : "text-black"
          }`}
        >
          X
        </span>
      </span>
      <div className="positivity__words text-white">
        <span
          className={` !font-neue lg:!font-helvetica change  font-[500] text-[16px] lg:text-[20px] !top-[33%] lg:!top-[26%]  ${
            !hide ? "text-white" : "text-black"
          }`}
        >
          Grateful
        </span>
        <span
          className={`change  !font-neue lg:!font-helvetica  font-[500] text-[16px] lg:text-[20px] !top-[33%] lg:!top-[26%]  ${
            !hide ? "text-white" : "text-black"
          }`}
        >
          Humble
        </span>
        <span
          className={`change  !font-neue lg:!font-helvetica  font-[500] text-[16px] lg:text-[20px] !top-[33%] lg:!top-[26%]  ${
            !hide ? "text-white" : "text-black"
          }`}
        >
          Kind
        </span>
        <span
          className={`change  !font-neue lg:!font-helvetica  font-[500] text-[16px] lg:text-[20px] !top-[33%] lg:!top-[26%]  ${
            !hide ? "text-white" : "text-black"
          }`}
        >
          Wise
        </span>
      </div>
    </div>
  );
}
