import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import KNR from './products/KNR';
import RSA from './products/RSA';
import BMK from './products/BMK';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Products = (props) => {
    return (
        <div>
            <Carousel selectedItem={parseInt(props.select)}>
                <KNR />
                <RSA />
                {/* <BMK />  */}
            </Carousel>
        </div>
    )
}

export default Products;