import React from "react";
import image from '../icons/image1.png'

const Info = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center text-center w-1/2 bg-yellow-400">
        <text className="font-bold text-4xl">
        ООО «ТеплоГазМонтаж»
        </text>
        <text className="mx-32 text-2xl text-left font-medium">
          - Реализация под «ключ» проектов газоснабжения, теплоснабжения,
          электроснабжения, автоматизации химической и нефтехимической
          промышленности, сетей связи.
        </text>
        <text className="mx-32 text-2xl text-left font-medium">
        - Производство блочно-модульных котельных
          и котлов наружного размещения
        </text>
      </div>
      <img classname="w-full h-auto" src={image} alt='oops' />
      <div></div>
    </div>
  );
};

export default Info;
