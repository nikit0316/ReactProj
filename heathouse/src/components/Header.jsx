import React from "react";
import image from "../icons/Rectangle4.png";

const Header = () => {
  return (
    <div className="flex flex-row mx-8 my-8">
      <div>
        <img className="w-40 h-auto" src={image} alt="Oops" />
      </div>
      <div className="flex-col">
        <div className="flex flex-row justify-between my-3 mb-10">
          <div className="mx-40">
            <text className="text-red-900">
              Россия, г. Казань
            </text>
            <text className="text-red-900">
              ул. Проспект Победы, д. 159, оф. 508
            </text>
          </div>
          <div>
            <text className="text-red-900">Sup</text>
          </div>
        </div>
        <div className="">
          <text className="text-red-900">Hello</text>
        </div>
      </div>
    </div>
  );
};

export default Header;
