import React from 'react'
import FontSize from './FontSize'
import ThemeToggle from './ThemeToggle'
import ProfileDropDownItem from './ProfileDropDownItem'
import { ProfileIcon, SignOutIcon } from './assets'

function ProfileDropDown() {
  return (
    <div className='p-2 bg-black/20 rounded-md dark:bg-black/30'>
      <div className='flex justify-between items-center mb-2'>
        <FontSize />
        <ThemeToggle />
      </div>
      <div>
        <ProfileDropDownItem
          icon={<ProfileIcon />}
          title="Profile"
        />
        <ProfileDropDownItem
          icon={<SignOutIcon />}
          title="Sign Out"
        />
      </div>
    </div>
  )
}

export default ProfileDropDown