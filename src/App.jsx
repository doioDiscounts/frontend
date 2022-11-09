import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Search from './pages/Search'
import { Context, hooks } from "./utils"

export default function App() {

  const {state, setState} = hooks()

  return (
    <Context.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

