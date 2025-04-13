import React from 'react'
import "./Loader.css"
import Text from '../Book-Viewer/Text'
import { useSelector } from 'react-redux'
function Loader() {
  return (
    <div className="loader">
      <div className="loader-spinner">
        <div className="loader-spinner-dot"></div>
        <div className="loader-spinner-dot"></div>
        <div className="loader-spinner-dot"></div>
      </div>
    </div>
  )
}

function RightMsgBox({ message }) {
  const fontSize = useSelector(state => state.fontSize);
  return (
    <div className={`border w-[90%] m-2 p-2 rounded-md ml-auto bg-yellow-200 relative text-${fontSize==1 ? 'sm' : fontSize==2 ? 'md' : 'lg'}`}>
      {(message) ? <Text text={message} /> : <Loader />} 
    </div>
  )
}
export default RightMsgBox