import React from "react";
import ProductContainer from "../components/ProductContainer";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import Pagination from '../components/Pagination'
import { Context } from "../utils";

export default function Search() {

    const context = React.useContext(Context)

    return (
        <div>
            <Navbar />
            <Sidebar />
            <ProductContainer />
            <Pagination />
            <Footer />
        </div>
    )
}