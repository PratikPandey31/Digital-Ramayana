import React from 'react'

function VerseView({color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color || "#1f2937"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-file-symlink flex items-center justify-center pulse transition-all ease-in-out duration-200 h-5 w-5 stroke-2 dark:stroke-gray-900" aria-hidden="true" focusable="false"><path d="M4 21v-4a3 3 0 0 1 3 -3h5"></path><path d="M9 17l3 -3l-3 -3"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5"></path></svg>
  )
}

export default VerseView