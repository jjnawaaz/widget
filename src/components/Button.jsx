import React from "react";

const Button = ({ bgColor, textColor, text }) => {
  return (
    <div>
      <button
        className={`px-4 py-1 ${bgColor} ${textColor} text-sm rounded-md shadow-sm shadow-black hover:cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
