import React from 'react'

const Skill = (props) => {
  return (
    <div className='border rounded-2xl p-4 border-solid hover:bg-zinc-700 cursor-pointer'>
      <img width={100} src={props.src} alt="" />
    </div>
  )
}

export default Skill
