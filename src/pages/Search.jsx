import React from "react";
import ProductContainer from "../components/ProductContainer";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Pagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'

export default function Search() {
    return (
        <div>
            <Navbar />
            <Sidebar/>
            <ProductContainer />
            <Pagination />
            <Footer />
        </div>
    )
}