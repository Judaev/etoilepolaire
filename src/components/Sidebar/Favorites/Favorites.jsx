import React from 'react'
import Card from '../../../Common/components/card/card.component'
import { SFavoritesContainer, SFavoritesTitle } from './favorites.styled'

const Favorites = () => {
  return (
    <SFavoritesContainer>
      <SFavoritesTitle>
        Invitations
      </SFavoritesTitle>
      <Card />
      <Card />
      <Card />
    </SFavoritesContainer>
  )
}

export default Favorites