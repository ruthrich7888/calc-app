import React from "react";

const TipButton = ({ percentage, isSelected, onClick }) => {
  return (
    <div className=" w-100 select col-6 col-lg-4">
      <button
        className={`border-0 tipbtn ${
          isSelected ? "btntipselected" : "btntip"
        }`}
        onClick={onClick}
      >
        {percentage}%
      </button>
    </div>
  );
};

export default TipButton;
