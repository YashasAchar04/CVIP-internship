import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const SideNavbar = () => {
  const [Show, setShow] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (ref.current.style.width === "50%" && ref.current.style.left === "0") {
      setShow(false);
    }
  }, [ref]);
  return (
    <>
      {Show && (
        <div className='md:hidden p-3 flex flex-col gap-10 bg-zinc-700'>
          <button id='open' onClick={() => {
            setShow(!Show);
            ref.current.style.width = "50%";
            ref.current.style.left = 0;
          }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg></button>
          <button id='home'><svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 576 512"><path d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432V206.7L288 37.3 480 206.7V432c0 26.5-21.5 48-48 48H368V320c0-17.7-14.3-32-32-32H240c-17.7 0-32 14.3-32 32V480H144c-26.5 0-48-21.5-48-48zm144 48V320h96V480H240z" /></svg></button>
          <button id='about'>
          <svg height="20px" xmlns="http://www.w3.org/2000/svg" fill='#fff' width="20px" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></button>
          <button id='projects'><svg height="20px" fill='#fff' width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" /></svg></button>
          <button id='contact'><svg height="20px" width="20px" fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">t <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></button>
        </div>
      )}

      <nav ref={ref} className='bg-zinc-700 md:hidden z-10 transition-all h-screen w-0 md:w-0 relative left-[-800px]'>
        <div className='flex py-5 px-5 justify-between'>
          <h1 className='text-xl font-heading md:text-3xl px-3'>Port<Link className=' text-[#0ff] font-heading' to="/">folio</Link> </h1>
          <button ref={ref} onClick={() => {
            ref.current.style.left = "-800px";
            ref.current.style.width = 0;
            setShow(true);
          }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path d="M15.7494 15L9.75 9M9.75064 15L15.75 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12Z" stroke="currentColor" strokeWidth="1.5" />
            </svg></button>
        </div>
        <ul className='flex flex-col items-center gap-7 text-lg md:text-xl font-secondary_heading  font-semibold justify-around'>
          <li>
            <NavLink className={(e) => e.isActive ? "text-[#0ff]" : ""} to="/home">
              Home</NavLink>
          </li>
          <li>
            <NavLink className={(e) => e.isActive ? "text-[#0ff]" : ""} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={(e) => e.isActive ? "text-[#0ff]" : ""} to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink className={(e) => e.isActive ? "text-[#0ff]" : ""} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SideNavbar
