import React from "react";
import Carousel from '../components/Carousel'
import ProductContainer from "../components/ProductContainer";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination";

export default function Home() {

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Carousel />
            <ProductContainer />
            <Pagination />
            <Footer />
        </div>
    )
}