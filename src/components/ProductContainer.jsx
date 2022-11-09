import { Context } from "../utils";
import React from "react";
import Product from './Product'

export default function ProductContainer() {

    const context = React.useContext(Context)

    return (
        <div className="productContainer">
            {context.state && (
                context.state.products.map((p, k) => (
                    <Product product={p} key={k} />
                ))
            )}
            
        </div>
    )
}