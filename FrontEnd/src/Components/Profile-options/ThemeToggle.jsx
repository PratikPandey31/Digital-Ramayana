import React from 'react'
import { Light, Dark } from "./assets"
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../Features/ramayan/ramayanSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  
  React.useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <div>
      <button className={`bg-slate-100 border-slate-200 rounded-2xl w-11 h-6 transition-all duration-400 shadow relative ${theme==='dark' ? "bg-orange-300 opacity-80" : ""}`}
      onClick={() => {
          dispatch(changeTheme());
        }
      }>

        <div className={`thumb size-5 bg-slate-400 rounded-full absolute left-[2px] top-1/2 transition-all duration-300 translate-y-[-50%] ${theme==='dark' ? 'translate-x-5 bg-red-400' : ''}`}>
          {theme==='dark' ? <Dark /> : <Light />}
        </div>
      </button>
    </div>
  )
}

export default ThemeToggle