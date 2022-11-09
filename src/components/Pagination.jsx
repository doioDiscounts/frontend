import React from "react";
import { Context, paginationArrowClassname, togglePagination } from "../utils";

export default function Pagination() {

    const context = React.useContext(Context)

    return (
        <div className="paginationContainer">
            <div
                className={paginationArrowClassname(context).previous}
                onClick={() => togglePagination(context, -1)}
            >
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div
                className={paginationArrowClassname(context).forward}
                onClick={() => togglePagination(context, 1)}
            >
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
        </div>
    )
}