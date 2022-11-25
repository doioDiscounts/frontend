import React from "react";
import { useAppContext } from "../utils";

export default function Pagination() {

    const { paginationArrowClassname, togglePagination } = useAppContext()

    return (
        <div className="paginationContainer">
            <div
                className={paginationArrowClassname().previous}
                onClick={() => {
                    togglePagination(-1)
                    window.scrollTo({ top: 0 })
                }}
            >
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div
                className={paginationArrowClassname().forward}
                onClick={() => {
                    togglePagination(1)
                    window.scrollTo({ top: 0 })
                }}
            >
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
        </div>
    )
}