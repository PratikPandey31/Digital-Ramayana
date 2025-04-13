import React from 'react'
import { NavLink } from 'react-router-dom';

function NextButton({sarga, shloka, symbol, setState}) {
  return (
    <NavLink to={`/ramayan/balkand/${sarga}/${shloka}`} onClick={setState}>
      <div className='border-2 h-20 w-32 rounded-md flex items-center m-auto mb-2 shadow hover:bg-slate-100 transition-all backdrop-blur-sm bg-white/25 dark:text-white dark:hover:bg-slate-400'>
        <div className='basis-3/4 pl-6'>
          <h5 className='font-bold'>Sarga {sarga}</h5>
          <p>{shloka}</p>
        </div>
        <div className='text-2xl font-md text-center flex-1'>{symbol}</div>
      </div>
    </NavLink>
  )
}

export default NextButton