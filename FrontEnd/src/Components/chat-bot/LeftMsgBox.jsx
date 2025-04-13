import React from 'react'
import { useSelector } from 'react-redux';

function LeftMsgBox({ message = "shloka" }) {
  const fontSize = useSelector(state => state.fontSize);
  return (
    <div className={`border w-[90%] mx-2 mt-2 p-2 rounded-md bg-orange-200 text-${fontSize==1 ? 'sm' : fontSize==2 ? 'md' : 'lg'}`}>
      {message}
    </div>
    
  )
}

export default LeftMsgBox