import React from 'react'
import { SContainer, SProfileContainer, SProfileUserName } from './sidebarProfile.styled'

const SidebarProfile = () => {
  return (
    <SContainer>
      <SProfileContainer>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%'}} >
        <img src="https://sun9-57.userapi.com/impf/1YklmbSry4pKP-mzpylXkT7a52Bidr95Ukdzag/pCSTI9yZ-co.jpg?size=828x964&quality=96&proxy=1&sign=0811e6fa37270cee1890d872d22879f0" alt="" style={{width: '40px', height: '40px', borderRadius: '8px', marginRight: '20px'}} />
        <SProfileUserName>
          Judaev Denis
        </SProfileUserName>
      </div>
    </SProfileContainer>
    </SContainer>
  )
}

export default SidebarProfile