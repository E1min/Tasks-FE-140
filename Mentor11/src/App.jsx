import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contactus from './pages/Contactus';
const url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92"

function App() {
const [movies,setMovies]=useState([]);
const [dark,setDark]=useState(false)

const getmod=(p)=>{
  setDark(p)
}

function getData(){
  fetch(url)
  .then(resp=>resp.json())
  .then(data=>{
    setMovies(data.data.results)
  })
}

useEffect(()=>{getData()},[])




  return (
    <div  className= {dark ? "dark":null}>
      <Navbar mod={getmod} />
      <Routes>
        <Route path='/' element={<Home  data={movies}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contactus/>}/>

      </Routes>
   
    </div>
  )
}

export default App
