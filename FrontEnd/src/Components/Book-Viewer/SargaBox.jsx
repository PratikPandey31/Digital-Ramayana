import React from 'react'
import propType from 'prop-types'
import { NavLink } from 'react-router-dom'

function SargaBox({ SargaNumber = "1", SargaHindi = "१" }) {
  return (
    <NavLink to={`/ramayan/balkand/${SargaNumber}`}>
      <div className='border-2 h-20 w-32 rounded-md flex items-center mx-auto mb-2 shadow hover:bg-slate-100 transition-all backdrop-blur-sm bg-white/25 dark:text-slate-100 dark:border-none dark:hover:bg-slate-300 dark:hover:text-slate-800'>
        <div className='text-2xl font-md text-center flex-1'>{SargaNumber}</div>
        <div className='basis-3/4 pl-1'>
          <h5 className='font-bold'>सर्ग {SargaHindi}</h5>
          <p>Sarga {SargaNumber}</p>
        </div>
      </div>
    </NavLink>
  )
}

SargaBox.propTypes = {
  SargaNumber: propType.string,
  SargaHindi: propType.string
}

export default SargaBox