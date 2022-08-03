import './HeaderMenuBar.scss';
import { GiIsland } from 'react-icons/gi'
import { GiPalmTree } from 'react-icons/gi'
import { MdOutlinePool } from 'react-icons/md'
import { FaSpaceShuttle } from 'react-icons/fa'
import { IoIosFlower } from 'react-icons/io'
import { GiGreenhouse } from 'react-icons/gi'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { GiCampingTent } from 'react-icons/gi'
import { GiCoffeeCup } from 'react-icons/gi'
import { GiRiver } from 'react-icons/gi'
import { MdOutlineSurfing } from 'react-icons/md'
import { SiHomeassistant } from 'react-icons/si'
import { GiMountainCave } from 'react-icons/gi'

const HeaderMenuBar = (props) => {  
    const currentOption = props.currentOption;
    const changeOption = props.navOption;
  
  return (
    <div className='header-menu-bar-main'>
                    <div className={`header_menu_bar-options`} id={currentOption===1 ? "selectedOpt" : ""} onClick={() => changeOption(1)}>
                            <p className="header_menu_bar-icon"><GiIsland /></p>
                            <p className="header_menu_bar-option">Islands</p>
                    </div>
                    <div className={`header_menu_bar-options selectedOpt`} id={currentOption===2 ? "selectedOpt" : ""} onClick={() => changeOption(2)}>
                            <p className="header_menu_bar-icon"><GiPalmTree /></p>
                            <p className="header_menu_bar-option">Nationals parks</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===3 ? "selectedOpt" : ""} onClick={() => changeOption(3)}>
                            <p className="header_menu_bar-icon"><GiGreenhouse /></p>
                            <p className="header_menu_bar-option">Tiny homes</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===4 ? "selectedOpt" : ""} onClick={() => changeOption(4)}>
                            <p className="header_menu_bar-icon"><FaSpaceShuttle /></p>
                            <p className="header_menu_bar-option">OMG!</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===5 ? "selectedOpt" : ""} onClick={() => changeOption(5)}>
                            <p className="header_menu_bar-icon"><GiCampingTent /></p>
                            <p className="header_menu_bar-option">Camping</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===6 ? "selectedOpt" : ""} onClick={() => changeOption(6)}>
                            <p className="header_menu_bar-icon"><IoIosFlower /></p>
                            <p className="header_menu_bar-option">Arctic</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===7 ? "selectedOpt" : ""} onClick={() => changeOption(7)}>
                            <p className="header_menu_bar-icon"><TbBuildingSkyscraper /></p>
                            <p className="header_menu_bar-option">Design</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===8 ? "selectedOpt" : ""} onClick={() => changeOption(8)}>
                            <p className="header_menu_bar-icon"><GiCoffeeCup /></p>
                            <p className="header_menu_bar-option">Breakfasts</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===9 ? "selectedOpt" : ""} onClick={() => changeOption(9)}>
                            <p className="header_menu_bar-icon"><MdOutlinePool /></p>
                            <p className="header_menu_bar-option">Amazing pools</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===10 ? "selectedOpt" : ""} onClick={() => changeOption(10)}>
                            <p className="header_menu_bar-icon"><GiRiver /></p>
                            <p className="header_menu_bar-option">Islands</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===11 ? "selectedOpt" : ""} onClick={() => changeOption(11)}>
                            <p className="header_menu_bar-icon"><MdOutlineSurfing /></p>
                            <p className="header_menu_bar-option">Lakefront</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===12 ? "selectedOpt" : ""} onClick={() => changeOption(12)}>
                            <p className="header_menu_bar-icon"><SiHomeassistant /></p>
                            <p className="header_menu_bar-option">Shared homes</p>
                    </div>
                    <div className={`header_menu_bar-options`} id={currentOption===13  ? "selectedOpt" : ""} onClick={() => changeOption(13)}>
                            <p className="header_menu_bar-icon"><GiMountainCave /></p>
                            <p className="header_menu_bar-option">Caves</p>
                    </div>
    </div>
  )
}
export default HeaderMenuBar;