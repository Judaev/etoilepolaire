import React from 'react'
import SearchIcon from '../icons/searchIcon.component'
import { SSearchIconContainer, SSearchInputContainer, SSearchInputTitle } from './searchInput.styled'

const SearchInput = () => {
  return (
    <SSearchInputContainer>
      <SSearchIconContainer>
        <SearchIcon opacity='0.5' />
      </SSearchIconContainer>
      <SSearchInputTitle>
        Search
      </SSearchInputTitle>
    </SSearchInputContainer>
  )
}

export default SearchInput
