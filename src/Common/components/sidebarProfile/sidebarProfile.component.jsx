import React from 'react'
import { SContainer, SProfileContainer, SProfileUserName, SProfileUserNameContainer } from './sidebarProfile.styled'

const SidebarProfile = () => {
  return (
    <SContainer>
      <SProfileContainer>
        <img src="https://sun9-63.userapi.com/impf/c850124/v850124719/12fe02/sT0rGwjNMDA.jpg?size=549x578&quality=96&proxy=1&sign=639326bacd45c5544eacd733aecf8aa6" alt="" style={{width: '40px', height: '40px', borderRadius: '10px', marginRight: '20px'}}/>

        <SProfileUserNameContainer>
          <SProfileUserName>
            Judaev Denis
          </SProfileUserName>
          <div>@judaev</div>
        </SProfileUserNameContainer>
    </SProfileContainer>
    </SContainer>
  )
}

export default SidebarProfile