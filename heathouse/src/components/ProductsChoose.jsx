import React, {useState} from "react";
import image1 from "../icons/image13.png";
import image3 from "../icons/image2.png";
import image2 from "../icons/imageRSA.png";
import Block from "./Block";
import Products from "./Products";

const ProductsChoose = () => {

  const [select, setSelect] = useState(0);

  const selectItem = (event) => {
    console.log(event.target.id)
    setSelect(event.target.id)
  }
  return (
    <div>
      <div className="flex flex-col justify-center align-middle items-center my-20">
        <div className="w-1/3">
          <div className="text-center text-5xl font-bold mb-4">Продукция</div>
          <div className="bg-red-900 h-0.5 m-3 mb-10"></div>
        </div>
        <div className="flex flex-row">
          <Block
            selectItem={selectItem}
            className="w-full"
            image={image1}
            value={0}
            text="Котлы наружного размещения на базе настенных котлов"
          />
          <Block
            selectItem={selectItem}
            className="w-full"
            image={image2}
            value={1}
            text="Котлы наружного размещения на базе котлов RSA"
          />
          <Block
            selectItem={selectItem}
            className="w-full"
            image={image3}
            value={4}
            text="Блочно-модульные котельные"
          />
        </div>
      </div>
      <Products select={select}/>
    </div>
  );
};

export default ProductsChoose;
