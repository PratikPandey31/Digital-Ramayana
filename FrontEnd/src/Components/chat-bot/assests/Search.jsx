import React from 'react'

function Search({ color }) {
  return (
    <svg stroke={color || "#000000"} width="24" height="24" className='dark:stroke-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill='none' />
    </svg>
  )
}

export default Search