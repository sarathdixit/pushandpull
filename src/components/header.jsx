import React from "react";
import CustomImage from "./image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3 fixed z-20 w-full bg-white border-b-[1px] border-b-[#CECFCD]">
      <CustomImage url={"/assets/window.svg"} className="w-[50px] h-[50px]" />
      <CustomImage
        url={"/assets/logo.svg"}
        className="w-[100.061px] h-[60.199px]"
      />
      <div>
        <button
          style={{ lineHeight: "104%" }}
          className="bg-black text-white py-[10px] px-[34px]"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
