import React from 'react';
import { Transition } from 'react-transition-group';
import { useAppContext } from '../utils';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const { state, setState, toggleSearch, } = useAppContext();
  const navigate = useNavigate()

  return (
    <div>
      <Transition
        in={state.isSidebarOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit>
        {transitionState => {
          return (
            <>

              <div className="sidenav" style={transitionState === "entering" ? { animation: "moveSideBar .3s forwards" } : transitionState === "entered" ?
                { transform: "translateX(-0px)" } : { animation: "moveSideBar .3s reverse backwards" }}>
                {state.categories && (
                  state.categories.map((c, k) => (
                    <div key={k} onClick={() => {
                      toggleSearch(c)
                      setState(p => ({ ...p, isSidebarOpen: false }))
                      navigate('/search')
                    }}>{c}</div>
                  ))
                )}
              </div>

              <div className="overlay"
                style={transitionState === "entering" ? { animation: "show .3s forwards" }
                  : transitionState === "entered" ? { opacity: "1" } : { animation: "show .3s backwards reverse" }}
                onClick={() => setState(p => ({ ...p, isSidebarOpen: false }))}></div>

            </>
          )
        }}
      </Transition>

    </div>
  );
}