import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import "./DropDown.css"

function DropDownItem({ img = "", text, description = "", to }) {
  return (
    <li className='py-2 px-4 border-black hover:cursor-pointer dark:hover:bg-white/40 hover:bg-white/50 w-full rounded-md mb-1'>
      <Link to={to} className='flex'>
        <div className='size-11 mr-2 rounded p-1'>{img}</div>
        <div className=''>
          <h5 className='font-semibold dark:text-slate-50'>{text}</h5>
        </div>
      </Link>
    </li>
  );
}

DropDownItem.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  to: PropTypes.string,
};

export default DropDownItem