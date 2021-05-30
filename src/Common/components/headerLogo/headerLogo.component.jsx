import React from 'react'
import LogoIcon from '../icons/logoIcon.component'
import { SHeaderLogoContainer, SHeaderLogoTitle } from './headerLogo.styled'

const HeaderLogo = () => {
  return (
    <SHeaderLogoContainer>
      {/* <LogoIcon /> */}
      <SHeaderLogoTitle>
        Étoile Polaire
      </SHeaderLogoTitle>
    </SHeaderLogoContainer>
  )
}

export default HeaderLogo
