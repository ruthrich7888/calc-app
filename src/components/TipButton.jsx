import React from "react";

const TipButton = ({ percentage, isSelected, onClick }) => {
  return (
    <div className="select col-6 col-lg-4">
      <button
        className={`border-0 tipbtn width  ${
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
