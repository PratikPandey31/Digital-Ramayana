import React from 'react'

function Button({ children, onClick, customStyles, disabled, captionText='' }) {
  const [caption, setCaption] = React.useState(false);
  return (
    <div className='relative'>
      <button type="button" aria-pressed="false" data-state="off" className={`'bg-white' ${customStyles} rounded-md flex items-center justify-center px-2 py-1 border-2 border-gray-200 hover:border-slate-500 dark:border-gray-800 dark:hover:border-gray-600 dark:bg-slate-200/50 disabled:bg-[#b8c0cb] disabled:border-slate-100 disabled:hover:cursor-not-allowed disabled:text-slate-500`} onClick={onClick} disabled={disabled} onMouseEnter={() => setCaption(true)} onMouseLeave={() => setCaption(false)}>
        {children}
      </button>
      {captionText.length > 0 && <span className={`bg-orange-200 absolute top-8 right-0 w-24 text-center rounded font-medium transition ease-in delay-1000 duration-1000 ${caption ? "block" : "hidden"} py-1 font-baloo`}>{captionText}</span>}
    </div>
  )
}

export default Button