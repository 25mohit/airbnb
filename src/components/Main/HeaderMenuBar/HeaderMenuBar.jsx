import './HeaderMenuBar.scss'
import { HEADER_BAR_DATA } from '../../../Data/HeaderBar/HEADER_BAR_DATA'

const HeaderMenuBar = (props) => {
  const currentOption = props.currentBarOption;
  const changeOption = props.changeBarOption;

  const getOptionId = (id, i) => {
      
        changeOption(6)
      console.log(i);
  }
console.log(currentOption);
  return (
    <div className='header-menu-bar-main'>
            {
                HEADER_BAR_DATA.map((data, i ) => 
                    <div key={ data.id } className={`header_menu_bar-options`} onClick={ () => getOptionId( data.id, i ) }>
                            <span className="header_menu_bar-icon">{ data.icon }</span>
                            <p className="header_menu_bar-option">{ data.name }</p>
                    </div>)
            }
    </div>
  )
}

export default HeaderMenuBar;