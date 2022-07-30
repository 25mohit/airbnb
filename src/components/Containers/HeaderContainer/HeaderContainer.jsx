import React, { useState } from 'react'
import Header from '../../Main/Header/Header'
import HeaderMenuBar from '../../Main/HeaderMenuBar/HeaderMenuBar'

const HeaderContainer = () => {
  const [toogleHeaderOption, setToogleHeaderOption] = useState(1)
  const [toogleHeaderBarOption, setToogleHeaderBarOption] = useState(1)

  return (
    <div>
          <Header changeOption={ setToogleHeaderOption } currentOption={ toogleHeaderOption }/>
          <HeaderMenuBar currentBarOption={ toogleHeaderBarOption } changeBarOption={ setToogleHeaderBarOption }/>
    </div>
  )
}

export default HeaderContainer