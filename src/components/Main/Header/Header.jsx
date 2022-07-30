import './Header.scss'
import HeaderToogle from '../HeaderToogle/HeaderToogle'
import bnbLogo from '../../Assests/Properties/BnbLogo.png'
import UserControls from '../UserControls/UserControls'

const Header = (props) => {
  return (
    <div className='header-main'>
            <div className="header-logo">
                  <img src={ bnbLogo } alt="" />
            </div>
            <HeaderToogle changeOption={ props.changeOption } currentOption={ props.currentOption } />
            <UserControls />
    </div>
  )
}

export default Header