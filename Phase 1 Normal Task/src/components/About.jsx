import React from 'react'
import "./Bg.css"
import SideNavbar from './SideNavbar';
import Skill from './Skill';

const About = () => {
  return (
    <div className="bg bg-zinc-600 flex md:w-full min-h-screen">
      <SideNavbar />
      <div className='flex w-screen py-5 md:py-0 h-screen overflow-x-hidden min-h-screen justify-center'>
        <div className="about-me px-10 md:p-0 md:w-1/2 flex flex-col items-center gap-8">
          <h1 className='text-4xl font-medium font-heading'>Get to Know me</h1>
          <h3 className='text-xl font-paragraph'>Hi , My Name is <span className='text-[#0ff] font-heading'>Yashas.M.Achar</span> and I am from Bengaluru , Karnataka. I'm a <span className='text-[#0ff] font-heading'>Frontend Web Developer</span> (Learning Backend as well) and a third year university student pursuing <span className='text-amber-400 font-heading'>B.E in Information Science</span> at <span className='text-yellow-400 font-heading'>Dr.A.I.T , Bengaluru, Karnataka.</span></h3>
          <h3 className='text-xl font-paragraph'>I love to create projects with amazing designs and to clone existing Websites . You can check out some of my work in the <span className='text-lime-400 font-heading'>project</span> section</h3>
          <h3 className='text-xl font-paragraph'>I am open to new collaborations or work where I can contribute and grow . Feel free to contact me . links are in the <span className='text-lime-400 font-heading'>contact</span> section</h3>
          <h2 className='text-3xl font-medium font-secondary_heading tracking-wider'>SkillSet</h2>
          <div id="skill" className='flex flex-col'>
            <div className="upper flex flex-wrap justify-center">
              <Skill src="/html.png" />
              <Skill src="/css.png" />
              <Skill src="/js.png" />
              <Skill src="react.png" />
              <Skill src="bootstrap.png"/>
              <Skill src="mongo.png"/>
              <Skill src="expressjs.png"/>
              <Skill src="tailwind.svg"/>
              <Skill src="nodejs.png" />
              <Skill src="github.png"/>
            </div>
          </div>
          <h3 className='text-start text-xl font-paragraph'>Apart from <span className='text-indigo-400 font-heading'>MERN</span> stack Web Development I have also learnt some of the  the other skills . They are listed below</h3>
          <ul className='list-disc font-paragraph text-lg'>
            <li>Programming With C</li>
            <li>Data Structures And Algorithm with C/C++</li>
            <li>Python Programming</li>
            <li>OOPS with Java</li>
            <li>Computer Networks</li>
            <li>Operating Systems</li>
            <li>DBMS (SQL)</li>
          </ul>


        </div>
      </div>
    </div>
  )
}

export default About
