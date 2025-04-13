// import React from 'react'
// import DropDownItem from './DropDownItem'
// import "./DropDown.css"
// import Blog from '../../Assests/Drop-Down/Blog';
// import Docs from '../../Assests/Drop-Down/Docs';


// function DropDownList() {
//   const [isActive, setIsActive] = React.useState(false);
//   return (
//     <div className='relative w-1/4'>
//       <div className="menu-trigger size-12">
//         <button onClick={() => setIsActive(!isActive)}>
//           <img src="/tripund.png"
//             className="size-12 rounded-full overflow-hidden cursor-pointer"
//             alt="menu-trigger" />
//         </button>
//       </div>

//       <div className={`absolute top-16 left-0 w-auto ${isActive ? 'active' : 'inactive'} bg-slate-800 bg-opacity-95 backdrop-blur-sm border-2 dark:border-slate-500 rounded-lg animate-slide-down`}>
//         <ul>
//           <DropDownItem text="Home" img={<Docs/>} to={"/"}/>
//           <DropDownItem text="Register" img={<Blog/>} to="/register"/>
//           <DropDownItem text="Login" img={<Blog/>} to={"/login"}/>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default DropDownList

import React, { useState, useEffect } from 'react'
import DropDownItem from './DropDownItem'
import "./DropDown.css"
import Blog from '../../Assests/Drop-Down/Blog';
import Docs from '../../Assests/Drop-Down/Docs';

function DropDownList() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && !isHovered) {
      timer = setTimeout(() => {
        setIsActive(false);
      }, 1000); 
    }

    return () => clearTimeout(timer);
  }, [isActive, isHovered]);

  return (
    <div className='relative w-1/4'>
      <div className="menu-trigger size-12">
        <button onClick={() => setIsActive(!isActive)}>
          <img src="/tripund.png"
            className="size-12 rounded-full overflow-hidden cursor-pointer"
            alt="menu-trigger" />
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-auto ${isActive ? 'active' : 'inactive'} bg-slate-800 bg-opacity-95 backdrop-blur-sm border-2 dark:border-slate-500 rounded-lg animate-slide-down`}
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)} 
      >
        <ul>
          <DropDownItem text="Home" img={<Docs />} to={"/"} />
          <DropDownItem text="Register" img={<Blog />} to="/register" />
          <DropDownItem text="Login" img={<Blog />} to={"/login"} />
        </ul>
      </div>
    </div>
  )
}

export default DropDownList;
