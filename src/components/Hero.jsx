import React from 'react'
import { motion } from "motion/react";
import { fadeUp } from '../utility/animation';

const Hero = () => {
  
    return (
    <section className='mt-36'>
      {/* legibilidad del texto */}
      <div className="absolute inset-0 bg-white/5"></div>

      {/* Contenido con movimiento */}
      <div className="font-serif relative z-10 text-center max-w-2xl px-6">
        <motion.h1 {...fadeUp}className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            
          El arte de la pasta artesanal
        </motion.h1>

        <motion.h2 {...fadeUp} className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md text-yellow-500">

          Sabores caseros, tradición italiana y la frescura que nos distingue
        </motion.h2>

        <motion.p {...fadeUp} className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow">

          En <span className="font-semibold text-yellow-500">Panadería Focaccia </span> 
          elaboramos pastas artesanales con recetas transmitidas de generación en 
          generación. Seleccionamos cuidadosamente ingredientes frescos y de calidad 
          para lograr una textura única y un sabor inigualable. Desde los clásicos 
          fideos hasta las pastas rellenas, cada bocado refleja el amor y la pasión 
          por la cocina casera.
        </motion.p>

        <motion.button {...fadeUp} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
          Descubrí nuestras especialidades
        </motion.button>

      </div>
    </section>
  
  )
}

export default Hero
