import React, { useState } from 'react'
import Header from '../../Main/Header/Header'
import HeaderMenuBar from '../../Main/HeaderMenuBar/HeaderMenuBar'

const HeaderContainer = ({ navOption,currentOption }) => {
  const [toogleHeaderOption, setToogleHeaderOption] = useState(1)

  return (
    <div>
          <Header changeOption={ setToogleHeaderOption } currentOption={ toogleHeaderOption }/>
          <HeaderMenuBar navOption={ navOption } currentOption={ currentOption } />
    </div>
  )
}

export default HeaderContainer