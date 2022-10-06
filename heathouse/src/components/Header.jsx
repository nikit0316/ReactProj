import React from "react";
import image from "../icons/Rectangle4.png";

const Header = () => {
  return (
    <div className="flex justify-around mx-8 my-8">
      <div className="w-1/5">
        <img className="w-40 h-auto" src={image} alt="Oops" />
      </div>
      <div className="w-2/3">
        <div className="flex flex-row ml-40 justify-around">
          <div className="flex-wrap w-2/5 mr-40">
            <text className="text-red-900">
              Россия, г. Казань ул. Проспект Победы, д. 159, оф. 508
            </text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-red-900 font-bold">tgm-kazan@mail.ru</h2>
            <h2 className="text-red-900 font-bold">+7(900)-000-00-00</h2>
          </div>
        </div>
        <div className="mr-28">
          <div className="bg-red-900 h-0.5 m-3"></div>
          <div className="flex justify-between">
            <text className="text-red-900">Главная</text>
            <text className="text-red-900">О компании</text>
            <text className="text-red-900">Контакты</text>
            <text className="text-red-900">Обратная связь</text>
            <text className="text-red-900">Разрешительные документы</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
