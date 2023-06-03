import React from "react";

function MoreBtn(props) {
  return (
    <button className="bg-[#d4a473] hover:bg-[#432818] text-white sm:text-2xl text-base font-semibold sm:py-5 py-3 sm:px-10 px-7 rounded-full">
      {props.children}
    </button>
  );
}

export default MoreBtn;
