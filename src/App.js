import React, { useState } from 'react'
import { Routes, Route } from'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockCats from "./mockCats"
// import { Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [cats, setCats] = useState(mockCats)

  console.log(cats)
  return (
    <>
      <Header />

      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path="/CatIndex" element={<CatIndex/>}/>
        <Route path="/CatShow" element={<CatShow/>}/>
        <Route path="/CatNew" element={<CatNew/>}/>
        <Route path="/CatEdit" element={<CatEdit/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
      <Footer />
    </>
  )
}

export default App