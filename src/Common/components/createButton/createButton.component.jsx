import React from 'react'
import PlusIcon from '../icons/plusIcon'
import { SCreateButtonContainer, SCreateButtonPlusIcon, SCreateButtonTitle } from './createButton.styled'

const CreateButton = ({modal, setModal}) => {
  return (
    <>
    <SCreateButtonContainer  onClick={() => setModal(!modal)}>
      <SCreateButtonPlusIcon>
        <PlusIcon width='12px' height='12px' />
      </SCreateButtonPlusIcon>
      <SCreateButtonTitle>
        Create
      </SCreateButtonTitle>
    </SCreateButtonContainer>

    {modal && <div> Модалка </div> }
    
    </>
  )
}

export default CreateButton
