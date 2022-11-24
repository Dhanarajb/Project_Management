import React from 'react'
import { BiGroup } from 'react-icons/bi';
import { SiGmail } from 'react-icons/si';
import { FcAutomatic } from 'react-icons/fc';
import { CiLock } from 'react-icons/ci';
const Header = () => {
  return (
    <div className='main'>

      <h2><CiLock />Project Management</h2>
      
      <div className='group'>
        <li><SiGmail />Integrate/0</li>
        <li><FcAutomatic />Automate/0</li>
        <li><BiGroup />/0</li>
        <li>Activities/0</li>
      </div>
    </div>
  )
}

export default Header
