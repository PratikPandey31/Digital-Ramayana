import React from 'react'
import ProfileDropDown from './ProfileDropDown';

function MoreOptions() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className='w-1/4 relative'>
      <div className="size-12 ml-auto">
        <button onClick={() => setIsActive(!isActive)}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="size-12 rounded-full overflow-hidden cursor-pointer bg-white"
            alt="menu-trigger" />
        </button>
      </div>
      <div className={`absolute rounded w-auto ${isActive ? 'active' : 'inactive'} bg-white/40 bg-opacity-65 backdrop-blur-sm rounded-md right-0 top-14 bg-slate-50  animate-slide-down`}>
        <ProfileDropDown />
      </div>
    </div>
  )
}

export default MoreOptions