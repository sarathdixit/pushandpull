import React from "react";

export default function MobileSection({ heading, description, hide = false }) {
  return (
    <div className="!px-5">
      <div className="flex gap-3 items-start">
        <div className="w-[1px] h-[20px] bg-black" />
        <div className="!font-neue font-[500] text-[24px] leading-[24px]">
          {heading}
        </div>
      </div>
      {!hide && (
        <p className="!font-neue font-[500] tracking-[1.2px] text-[30px] max-w-[80%] m-auto !mt-10 text-center leading-[34.5px] spacing-[1.2px]">
          {description}
        </p>
      )}
    </div>
  );
}
