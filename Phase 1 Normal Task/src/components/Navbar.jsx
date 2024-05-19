import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='top hidden md:flex sticky top-0 z-10 items-center justify-between px-6 py-4 bg-zinc-600 text-white'>
        <h1 className='text-4xl font-semibold font-heading tracking-wider'>Port<Link className=' text-[#0ff] font-heading tracking-wider' to="/">folio</Link> </h1>
        <ul className='flex w-1/2 text-xl font-secondary_heading font-semibold justify-around'>
            <li>
            <NavLink className={(e)=>e.isActive?"text-[#0ff]":""} to="/home">
              Home</NavLink>
            </li>
            <li>
                <NavLink className={(e)=>e.isActive?"text-[#0ff]":""} to="/about">About</NavLink>
            </li>
            <li>
            <NavLink className={(e)=>e.isActive?"text-[#0ff]":""} to="/projects">Projects</NavLink>
            </li>
            <li>
            <NavLink className={(e)=>e.isActive?"text-[#0ff]":""} to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
