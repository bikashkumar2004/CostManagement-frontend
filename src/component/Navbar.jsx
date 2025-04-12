import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className='w-full h-16 px-10 py-4 text-black sticky z-10'>
            <ul className='flex justify-between'>
                <li><a href="#" className='text-2xl font-bold font-WinkySans'>SiteCost Pro</a></li>
                <div className='md:flex justify-between gap-10 font-medium font-roboto pr-10 hidden'>
                    <li className='flex justify-center items-center'><Link to="/home">Home</Link></li>
                    <li className='flex justify-center items-center'><Link to="/about">About</Link></li>
                    <li className='flex justify-center items-center'><Link to="/product">Product</Link></li>
                    <li className='flex justify-center items-center'><Link to="/contact">Contact</Link></li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
