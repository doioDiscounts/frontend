import { sendClickInfo } from "../utils";
import React from "react";

export default function Product(props) {

    return (
        <a
            onClick={() => sendClickInfo(props.product._source.provider)}
            className="product"
            href={props.product._source.link}
        >
            <div className="productTitle">{props.product._source.title}</div>
            <img className="productImage" src={props.product._source.imageLink} alt="img" />
            <div className="productDiscount">{props.product._source.discount}% de descuento</div>
        </a>
    )
}