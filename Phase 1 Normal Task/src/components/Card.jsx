import React from 'react'

const Card = (props) => {
  return (
    <a href={props.github} className='flex gap-4 hover:bg-zinc-700 flex-col border rounded-lg p-4 '>
        <video autoPlay={true} muted={true} loop={true} width={300} src={props.src}></video>
      <p className='text-xl font-pro_font hover:text-[#0ff] font-medium'>{props.title}</p>
      <p className='font-pro2_font tracking-widest '>{props.desc}</p>
    </a>
  )
}

export default Card
