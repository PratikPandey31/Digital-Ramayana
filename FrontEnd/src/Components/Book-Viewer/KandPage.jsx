import React from 'react'
import KandBox from './KandBox'
import { useSelector } from 'react-redux'


function KandPage() {
  const Kandas = useSelector(state => state.kandas)

  return (
    <div className='rounded-xl bg-white/25 backdrop-blur-xl my-5 w-11/12 mx-auto'>
      <h1 className='font-baloo text-5xl font-semibold text-center py-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 leading-relaxed tracking-normal w-2/5 mx-auto'>बालकाण्ड</h1>
      <div className='flex flex-wrap justify-center items-center'>
        {Kandas.map((kand) => (
          <KandBox {...kand} key={kand.url} />
        ))}
      </div>
    </div>
  )
}

export default KandPage