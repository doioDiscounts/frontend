import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Search from './pages/Search'

export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

