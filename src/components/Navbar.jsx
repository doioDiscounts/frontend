import { Context, toggleSidebar, toggleSearch } from "../utils";
import React from "react";
import logo from '../media/logo.png'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const context = React.useContext(Context)
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <div className='navbarSidebarToggle'>
                <ion-icon onClick={() => toggleSidebar(context)} name='menu-outline' />
            </div>
            <a href="/"><img className="navbarLogo" src={logo} alt="Logo" /></a>
            <form onSubmit={(value) => {
                toggleSearch(context, value)
                navigate('/search')
            }}>
                <input className="searchBar" type="text" placeholder="Busqueda" />
            </form>
        </div>
    )
}