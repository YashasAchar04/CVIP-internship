import React, { useEffect } from 'react';
import SideNavbar from './SideNavbar';
import { NavLink } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      var typed = new Typed('#element', {
        strings: ["Web Developer", "Web-Designer", "Frontend-Developer", "React-Developer"],
        typeSpeed: 50,
      });

      return () => {
        typed.destroy();
      };
    };
  }, []);

  return (
    <>
      <div className="bg bg-zinc-600 flex md:w-full w-screen overflow-hidden">
        <SideNavbar />
        <div className="flex py-10 flex-row flex-wrap w-screen h-screen items-start justify-center md:items-center">
          <div className="left h-1/2 w-full flex md:gap-8 gap-4 flex-col justify-center items-center md:w-1/2 px-2 py-2 ">
            <div className="texts flex flex-col md:gap-8 gap-4 text-center">
              <h1 className="text-4xl md:text-6xl font-semibold">Hello there!</h1>
              <h1 className="text-3xl md:text-5xl font-medium font-heading">I'm <span className="text-[#0ff]">Yashas M Achar</span></h1>
              <h1 className='text-2xl font-medium md:text-3xl'>And I'm a <span className='text-[#0ff] font-heading' id="element"></span></h1>
            </div>
            <div className="btns flex gap-4 flex-wrap justify-center items-center">
              <NavLink className='border font-secondary_heading tracking-wider font-bold hover:bg-[#0ef] hover:text-black px-2 py-1 rounded-xl border-solid' to="/about">About me</NavLink>
              <NavLink className="border font-secondary_heading tracking-wider font-bold hover:bg-[#0ef] hover:text-black px-2 py-1 rounded-xl border-solid" to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="right flex w-full h-1/2 md:h-full justify-center items-center md:w-1/2 px-2 py-2">
            <img className="rounded-3xl h-3/4 glow md:h-1/2" src="/homePng.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
