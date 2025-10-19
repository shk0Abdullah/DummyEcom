import React from "react";

const Cover = () => {
  return (
    <>
      {" "}
      <div className=" hidden md:block relative h-screen w-full">
        <img
          src="/hero.webp"
          alt="Hero"
          className="absolute object-cover h-[90%] w-full object-center "
        />
      </div>
      <div className="block md:hidden mb-4 w-full overflow-hidden">
        <img
          src="/winter.webp"
          alt="Winter Hero"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default Cover;
