import React from 'react'
import { Plus, Minus } from "./assets";
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from '../../Features/ramayan/ramayanSlice';
function Button({ icon, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className='size-7 rounded-full text-xl flex items-center justify-center'
    >
      {icon}
    </button>
  )
}

function FontSize() {
  const fontSize = useSelector(state => state.fontSize);
  const dispatch = useDispatch();

  return (
    <div className='flex rounded-full bg-slate-100 dark:bg-slate-300'>
      <Button icon={<Minus color={fontSize === 1 ? '#94a3b8' : ''} />} disable={fontSize === 1}
      onClick={() => {
        dispatch(setFontSize(fontSize - 1));
      }} />

      {<div className='size-6 flex my-auto items-center justify-center text-xl font-medium text-slate-600 font-baloo dark:text-slate-900'>{fontSize == 1 ? 'S' : fontSize == 2 ? 'M' : 'L'}</div>}

      <Button icon={<Plus color={fontSize === 3 ? '#94a3b8' : ''} />} disable={fontSize === 3} onClick={() => dispatch(setFontSize(fontSize + 1))} />
    </div>
  )
}

export default FontSize