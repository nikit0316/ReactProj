import React from "react";
import image1 from "../icons/image13.png";
import image3 from "../icons/image2.png";
import image2 from "../icons/06VDaM3BPFQ5.png";
import Block from "./Block";

const ProductsChoose = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center my-20">
      <div className="w-1/3">
        <div className="text-center text-5xl font-bold mb-4">Продукция</div>
        <div className="bg-red-900 h-0.5 m-3 mb-10"></div>
      </div>
      <div className="flex flex-row">
        <Block
          className="w-full"
          image={image1}
          text="Котлы наружного размещения на базе настенных котлов"
        />
        <Block
          className="w-full"
          image={image2}
          text="Котлы наружного размещения на базе котлов RSA"
        />
        <Block
          className="w-full"
          image={image3}
          text="Блочно-модульные котельные"
        />
      </div>
    </div>
  );
};

export default ProductsChoose;
