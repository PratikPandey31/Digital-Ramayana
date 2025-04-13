import React from 'react'
import { Link } from 'react-router-dom'

function KandBox({ image, hindi, ipa, english, url }) {
  return (
    <div className='flex w-1/4 rounded-lg overflow-hidden mx-5 shadow-md mb-10 bg-white'>
      <div className='w-1/2'>
        <img src={image || "/ram-darbar.png"} alt={image} />
      </div>
      <Link className='m-auto' to={url}>
        <div className='m-auto'>
          <p className='text-orange-500 text-2xl font-semibold font-baloo'>{hindi}</p>
          <p className='text-yellow-500 text-xl font-medium font-baloo'>{ipa}</p>
          <p className='text-slate-600 text-lg font-normal font-baloo'>{english}</p>
        </div>
      </Link>
    </div>
  )
}

export default KandBox