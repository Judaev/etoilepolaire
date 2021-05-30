import React, { useState } from 'react'
import CreateButton from '../createButton/createButton.component'
import HeaderLogo from '../headerLogo/headerLogo.component'
import SearchInput from '../searchInput/searchInput.component'
import { SHeaderContainer } from './header.styled'

const Header= () => {
  const [modal, setModal] = useState(false)

  return (
    <SHeaderContainer style={{display: 'flex', justifyContent: 'space-between'}}>
      <HeaderLogo />
      <div style={{display: 'flex', alignItems: 'center'}}>
        <SearchInput />
        <CreateButton modal={modal} setModal={setModal} />
        <img src='https://sun9-63.userapi.com/impf/c850124/v850124719/12fe02/sT0rGwjNMDA.jpg?size=549x578&quality=96&proxy=1&sign=639326bacd45c5544eacd733aecf8aa6' style={{width: '40px', height: '40px', borderRadius: '12px'}} />
      </div>
    </SHeaderContainer>
  )
}

export default Header
