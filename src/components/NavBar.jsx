import React, { useState } from 'react'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = () => {
        setIsOpen(!isOpen)
  }

  const navbarlinks =[
    {
        id: 1,
        title: "inicio",
        link: "/"
    },
     {
        id: 2,
        title: "nosotros",
        link: "/"
    },
     {
        id: 3,
        title: "contacto",
        link: "/"
    },
     {
        id: 4,
        title: "soporte",
        link: "/"
    }
  ]

  const navbarRedes =[
    {
        id: 1,
        title: "Instagram",
        link:"http://www.instagram.com",
        icon: 'bi bi-instagram'
    },
    {
        id: 2,
        title: "Facebook",
        link: "http://www.facebook.com",
        icon: 'bi bi-facebook'
    },
    {
        id: 3,
        title: "GitHub",
        link: "https://www.github.com",
        icon: 'class="bi bi-github'
    }
  ]
  
    return (
    <nav className='fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md z-50'>
        <div className='flex justify-between items-center px-4 py-3 sm:px-12 sm:py-6'>
          
        {/* Título principal */}
            <div className="font-serif">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent tracking-tight leading-tight">
                    Panadería Focacha
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-amber-700/70 tracking-[0.2em] uppercase mt-0.5">
                    Pastas Artesanales
                </div>
            </div>

            {/* boton de hamburguesa */}
            <button onClick={toogleMenu} className='text-amber-700 md:hidden hover:text-amber-900 transition-colors'>
                <svg 
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                >
                    {isOpen ? (<path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                    />) : (<path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                    />)}
                </svg>
            </button>


              {/* navegacion desktop*/}

            <div className='hidden md:block'>
                <ul className='flex sm:space-x-8  space-x-4'>
                    {navbarlinks.map( link =>(
                        <li key={link.id}>
                            <a className='font-serif text-4 xl sm:text-lg font-bold bg-gradient-to-r from-amber-400 via-yellow-600 to-amber-700 bg-clip-text text-transparent tracking-tight leading-tight transition-transform hover:scale-110 transform inline-block duration-300'
                            href={link.link}>
                            {link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>


                {/*navegacion de redes  desktop*/}
            <div className='hidden md:block'>
               
                <ul className='flex space-x-4'>
                    {navbarRedes.map( link => (
                        <li key={link.id}>
                            <a target="_blank"
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={link.link}>
                                <i className={`${link.icon} sm:text-2xl text-lg text-amber-700 hover:text-amber-900 transition-all duration-300`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

            {/* Menu Mobile */}
            <div className={`font-serif md:hidden absolute w-full bg-white/85 backdrop-blur-md transition-all duration-1000 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                 <ul className=' flex-col px-4 py-2'>
                    {navbarlinks.map( link =>(
                        <li className='py-2 text-center'
                            key={link.id}>
                            <a className='text-amber-800 sm:text-lg text-sm font-semibold hover:text-amber-950 transition-transform hover:scale-110 transform inline-block duration-300'
                            href={link.link}
                            onClick={()=>(setIsOpen(false))}>
                            {link.title}</a>
                        </li>
                    ))}
                </ul>

                <ul className='flex space-x-4 px-4 py-2 border-t border-amber-400 justify-center'>
                    {navbarRedes.map( link => (
                        <li key={link.id}>
                            <a target="_blank"
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={link.link}
                            onClick={()=>(setIsOpen(false))}>
                                <i className={`${link.icon} sm:text-2xl text-lg text-amber-800 hover:text-amber-950 transition-all duration-300`}></i>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

    </nav>
  )
}

export default NavBar