import React from 'react'
import CloseIcon from '../icons/closeIcon'
import { SCardBackground, SCardButton, SCardCloseIconContainer, SCardContainer, SCardTitle } from './card.styled'

const Card = () => {
  return (
    <SCardContainer>
      <SCardBackground>
        <SCardTitle>
          How to a build a strong company
        </SCardTitle>
        <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
          <SCardButton>
            Accept
          </SCardButton>
          <SCardCloseIconContainer>
            <CloseIcon width='10px' height='10px' opacity='0.5' />
          </SCardCloseIconContainer>
        </div>
      </SCardBackground>
    </SCardContainer>
  )
}

export default Card
