import './HeaderToogle.scss'
import { FiSearch } from 'react-icons/fi';

const HeaderToogle = (props) => {
    const currentOption = props.currentOption;

  return (
    <div className='header-toogle-main'>
                <div className="header_toogle-option">
                            <p className={`header_toogle_option-text ${currentOption===1 ? 'selected' : ''}`} onClick={ () => props.changeOption(1) }>Anywhere</p>
                </div>
                <div className="header_toogle-option center">
                            <p className={`header_toogle_option-text ${currentOption===2 ? 'selected' : ''}`} onClick={  () => props.changeOption(2) }>Any week</p>
                </div>
                <div className="header_toogle-option">
                            <p className={`header_toogle_option-text ${currentOption===3 ? 'selected' : ''}`} onClick={  () => props.changeOption(3) }>Add guests</p>
                            <FiSearch id='header_toogle-search-icon'/>
                </div>
    </div>
  )
}

export default HeaderToogle