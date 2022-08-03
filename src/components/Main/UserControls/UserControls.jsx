import './UserControls.scss'
import { VscGlobe } from 'react-icons/vsc'
import { FaBars } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import UserOptions from '../UserControls/UserOptions/UserOptions'
import { useState } from 'react'

const UserControls = () => {
  const [showUserOption, setShowUserOption] = useState(false)
  
  return (
    <div className='user-controls'>
            <p className="user_control-become-text">Become a host</p>
            <p id="user_control-globe-icon"><VscGlobe /></p>
            <div className="user_control-user-option-section" onClick={() => setShowUserOption(!showUserOption)}>
                    <FaBars />
                    <FaUserCircle id='user_control-user-icon'/>
            </div>
            <div className="user-option-dropdown">
                { showUserOption && <UserOptions />}
            </div>
    </div>
  )
}

export default UserControls