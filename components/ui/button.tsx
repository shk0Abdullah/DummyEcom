import React from "react";

interface CustomBtnProps {
  text: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center ">
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition">
        {text}
      </button>
    </div>
  );
};

export default CustomBtn;
