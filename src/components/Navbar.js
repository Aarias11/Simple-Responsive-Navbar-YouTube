import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className='flex justify-between p-5 items-center border-b bg-[#e7e7e7d1] nav'>
        <h1 className='text-4xl logo'>navBAR.co</h1>
        <ul className='hidden sm:flex gap-6'>
            <li>Features</li>
            <li>Products</li>
            <li>About</li>
            <li>Locations</li>
            <li>Contact Us</li>
        </ul>
        <RxHamburgerMenu className='sm:hidden' size={25} />
    </nav>
  )
}

export default Navbar