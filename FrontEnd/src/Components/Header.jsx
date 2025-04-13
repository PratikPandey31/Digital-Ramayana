import React from 'react'
import MoreOptions from './Profile-options/MoreOptions'
import DropDownList from './DropDown/DropDownList'
import CurrentNavHeader from './CurrentNavHeader'

function Header() {

  return (
    <header className='backdrop-blur-sm text-red-300 flex justify-between items-center px-12 py-1 z-50 sticky top-0 dark:bg-gray-800'>
      <DropDownList />
      <CurrentNavHeader/>
      <MoreOptions />

    </header>
  )
}

export default Header
