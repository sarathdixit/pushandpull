import React from "react";

export default function MobileSection({ heading, description }) {
  return (
    <div className="!px-4">
      <div className="flex gap-3  items-center">
        <div className="w-[1px] h-[20px] bg-black" />
        <div className="!font-neue text-[24px]">{heading}</div>
      </div>
      <p className="!font-neue font-[400] tracking-[1.2px] text-[30px] max-w-[80%] m-auto !mt-8 text-center leading-[34.5px] spacing-[1.2px]">
        {description}
      </p>
    </div>
  );
}
