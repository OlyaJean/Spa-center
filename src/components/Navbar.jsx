import React from 'react'
import menu from './../assets/menu.png'
const Navbar = () => {
  return (
    <nav className='fixed top-0 right-0 flex flex-col justify-end items-end p-4 group '>
      <img src={menu} alt="" className='w-10 sm:w-16 hover:animate-pulse cursor-pointer'/>
      <ul className='bg-gray-600 p-5 rounded-xl text-right hidden group-hover:block'>
        <li className='text-sky-200 cursor-pointer hover:text-sky-400 transition-all duration-200'>
            Spa treatments
        </li>
        <li className='text-sky-200 cursor-pointer hover:text-sky-400 transition-all duration-200'>
            Membership
        </li>
        <li className='text-sky-200 cursor-pointer hover:text-sky-400 transition-all duration-200'>
            Address and <br /> Hours of operation
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
