import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Arrow from '../Assets/Main-Content-Shlok/Arrow'

function CurrentNavHeader() {
  const location = useLocation();
  const currentUrl = location.pathname + location.search + location.hash;
  const urlSegments = currentUrl.split('/');
  urlSegments.shift();
  const len = urlSegments.length - 2;

  return (
    <div className='min-w-1/2 flex'>
      {
        urlSegments.map((value, index) => (
          <div key={index} className='flex items-center'>
            <NavLink className={`${len < 0 ? 'text-orange-500' : "text-black"} font-baloo font-medium text-2xl dark:text-orange-500`} to={`/${urlSegments.slice(0, index + 1).join('/')}`}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </NavLink>
            {index <= len ? <Arrow /> : null}
          </div>
        ))
      }
    </div>
  )

}

export default CurrentNavHeader