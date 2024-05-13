import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router'
import Navbar from './layout/Navbar/Navbar'
import Smartphones from './pages/Smartphones/Smartphones'
import Laptops from './pages/Laptops/Laptops'
import Skincare from './pages/Skincare/Skincare'
function App() {
  return ( <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:smartphones' element={<Smartphones/>} />
        <Route path='/:laptops' element={<Laptops />} />
        <Route path='/:skincare' element={<Skincare />} />

      </Routes>
  </div>
  )
}

export default App
