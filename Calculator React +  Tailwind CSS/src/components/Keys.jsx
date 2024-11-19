import React from "react";

const Keys = ({ label, keyClass, onButtonClick }) => {
  const equalClass =
    "col-[span_2] bg-[#4da3e8] text-[#14100] shadow-md shadow-teal-300 text-xl font-bold hover:bg-[#ADD8E6]";
    
  return (
    <div
      className={`bg-[#141414] shadow-lg hover:text-black hover:font-bold shadow-teal-600 flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#4ccdc742] ${
        keyClass && equalClass
      }`}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </div>
  );
};

export default Keys;
