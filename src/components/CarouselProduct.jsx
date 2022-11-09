import { sendClickInfo } from "../utils";
import React from "react";

export default function carouselProduct(props) {

    return (
        <div className='carouselProduct'>
            <a
                onClick={() => sendClickInfo(props.product._source.provider)}
                href={props.product._source.link}
            >
                <img className="carouselProductImage" src={props.product._source.imageLink} alt="img" />
                <div className="carouselProductDiscount">{props.product._source.discount}% de descuento</div>
            </a>
        </div>
    )
}