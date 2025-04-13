import React from 'react'
import { Link } from 'react-router-dom'

function ProfileDropDownItem({ icon, title }) {
  return (
    <Link>
      <div  className='flex bg-slate-100 rounded-md w-36 h-10 mb-1 items-center px-3 dark:bg-slate-300'>
        <div className='mr-4'>{icon}</div>
        <div><p className='text-xl font-medium text-slate-600 font-baloo dark:text-slate-900'>{title}</p></div>
      </div>
    </Link>
  )
}

export default ProfileDropDownItem