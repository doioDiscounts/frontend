import { useAppContext } from "../utils";
import React from "react";
import Product from './Product'

export default function ProductContainer() {

    const { state } = useAppContext()

    console.log(state)

    return (
        <div className="productContainer">
            {state && (
                state.products.map((p, k) => (
                    <Product product={p} key={k} />
                ))
            )}

        </div>
    )
}