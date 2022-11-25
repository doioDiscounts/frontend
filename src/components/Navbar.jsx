import { useAppContext } from "../utils";
import React from "react";
import logo from '../media/logo.png'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate()

    const { toggleSearch, state, setState } = useAppContext()

    return (
        <div className="navbar">
            <div className='navbarSidebarToggle'>
                <ion-icon onClick={() => setState(p => ({ ...p, isSidebarOpen: true }))} name='menu-outline' />
            </div>
            <a href="/"><img className="navbarLogo" src={logo} alt="Logo" /></a>
            <form onSubmit={(value) => {
                toggleSearch(value)
                navigate('/search')
            }}>
                <input className="searchBar" type="text" placeholder="Busqueda" />
            </form>
        </div>
    )
}