import { Context, sidebarClassname, toggleSearch, toggleSidebar } from "../utils";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

    const context = React.useContext(Context)
    const navigate = useNavigate()

    return (
        <div className={sidebarClassname(context)}>
            {context.state && (
                context.state.categories.map((c, k) => (
                    <div key={k} onClick={() => {
                        toggleSearch(context, c)
                        toggleSidebar(context)
                        navigate('/search')
                    }}>{c}</div>
                ))
            )}
        </div>
    )
}