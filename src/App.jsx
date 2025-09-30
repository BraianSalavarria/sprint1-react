import React from 'react'
import NavBar from './components/NavBar'
import fondo from "./assets/fondo.webp"
import Hero from './components/Hero'

const App = () => {
const bgImagen ={
  backgroundImage: `url(${fondo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center", // desplaza el foco
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  position: "relative"
}  
  
  return (
    <div style={bgImagen} className='overflow-hidden min-h-screen'>
        <NavBar />
        <Hero />
    </div>
  )
}

export default App
