import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#009bd6]'>LOGO.</h1>
        <ul className='hidden md:flex items-center'>
            <li className='p-4'>Inicio</li>
            <li className='p-4'>Sobre</li>
            <li className='p-4'>Contato</li>
            <button className='w-[110px] my-6 mx-auto py-2 bg-white text-black font-bold rounded-lg'>Comprar</button>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            { !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} 
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#161616]' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#009bd6] mt-8 ml-4'>LOGO.</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-500'>Inicio</li>
                <li className='p-4 border-b border-gray-500'>Sobre</li>
                <li className='p-4 border-b border-gray-500'>Contato</li>
                <button className='w-[200px] my-6 mx-auto py-2 bg-white text-black font-bold rounded-lg'>Comprar</button>
            </ul>
        </div>

    </div>
  )
}
