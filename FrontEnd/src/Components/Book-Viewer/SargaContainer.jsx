import React from 'react'
import SargaBox from './SargaBox'
import { useSelector } from 'react-redux'

function SargaContainer() {
  const sargas = useSelector (state => state.sargas);
  return (
    <div className='overflow-auto w-1/5 h-full scrollbar bg-orange-'>
      {sargas.map((sarga) => (
        <SargaBox {...sarga} key={sarga.SargaNumber} />
      ))}
    </div>
  )
}

export default SargaContainer