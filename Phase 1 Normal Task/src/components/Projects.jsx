import React from 'react'
import SideNavbar from './SideNavbar';
import "./Bg.css";
import Card from './Card';

const Projects = () => {
  return (
    <div className="bg bg-zinc-600 flex md:w-full w-screen min-h-screen">
        <SideNavbar/>
        <div className='flex w-screen h-screen overflow-x-hidden'>
          <div className="Cards p-4 flex justify-center flex-wrap items-center gap-4">
            <Card github="https://github.com/YashasAchar04/Spotify-Clone.git" src="/spotify_video.mp4" title="Spotify Clone" desc="Spotify clone by using HTML, CSS and JS"/>
            <Card github="https://github.com/YashasAchar04/TodoList.git" src="/todoList_video.mp4" title="ToDo List" desc="ToDo list app using React and TailwindCSS"/>
            <Card github="https://github.com/YashasAchar04/Twitter-Frontend-Clone.git" src="/twitter_video.mp4" title="Twitter UI clone" desc="Twitter UI clone using TailwindCSS"/>
          </div>
        </div>
      </div>
  )
}

export default Projects
