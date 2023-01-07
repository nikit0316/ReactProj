import React from "react";
import image from "../icons/Rectangle4.png";
import pdf1 from "../icons/about.pdf";
import pdf2 from "../icons/contacts.pdf";
import pdf3 from "../icons/documents.pdf";
import Block from "./Block";
import Button from "./Button";

const Header = () => {

  const openPDF = (event) => {
    window.open(event).focus()
    console.log(event)
    return false;
  }

  const sendEmail = () => {
    window.open('mailto:test@example.com');
  }
  return (
    <div className="flex justify-around ml-8 my-8">
      <div className="w-1/6">
        <img className="w-40 h-auto" src={image} alt="Oops" />
      </div>
      <div className="w-3/4">
        <div className="flex flex-row ml-40 justify-around">
          <div className="flex-wrap w-2/5 mr-40">
            <div className="text-red-900 text-xl">
              Россия, г. Казань
            </div>
            <div  className="text-red-900 text-xl">
            ул. Проспект Победы, д. 159, оф. 508
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-red-900 font-bold">tgm-kazan@mail.ru</h2>
            <h2 className="text-red-900 font-bold">+7(965)-675-15-36</h2>
          </div>
        </div>
        <div className="mr-28">
          <div className="bg-red-900 h-0.5 m-3 mt-10"></div>
          <div className="flex justify-between">
          <a className ="text-red-900 text-xl font-bold" href={pdf1} target = "_blank" rel="noreferrer">О компании </a>
            <button onClick={sendEmail}> <text className="text-red-900 text-xl font-bold">Главная</text> </button>
            <a className ="text-red-900 text-xl font-bold" href={pdf2} target = "_blank" rel="noreferrer">Контакты </a>
            <button> <text className="text-red-900 text-xl font-bold">Обратная связь</text> </button>
            <a className ="text-red-900 text-xl font-bold" href={pdf3} target = "_blank" rel="noreferrer">Разрешительные документы</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
