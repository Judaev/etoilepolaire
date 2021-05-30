import React from 'react'
import SearchIcon from '../icons/searchIcon.component'
import { SSearchIconContainer, SSearchInput, SSearchInputContainer } from './searchInput.styled'

const SearchInput = () => {
  return (
    <SSearchInputContainer>
      <SSearchIconContainer>
        <SearchIcon opacity='0.3' />
      </SSearchIconContainer>
      <SSearchInput placeholder="Search" type="text" />
    </SSearchInputContainer>
  )
}

export default SearchInput
