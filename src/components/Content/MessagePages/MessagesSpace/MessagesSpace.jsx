import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators'
import { Textarea } from '../../../Common/FormsControls/FormsControls'
import Message from './Message/Message'
import style from './MessagesSpace.module.css'

const MessagesSpace = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  
  let newMessages = props.messages
      .map( message => <Message message={message.message} key={message.id} className={message.className} /> )

  return (
    <div className={style.main}>
      <div>
        { newMessages } 
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className={style.messagesInput}>
      <Field validate={[requiredField, maxLength100]} component={Textarea} name='newMessageBody' placeholder='Введите сообщение...'/>
      <button className={style.button}>Отправить</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
}) (AddMessageForm)

export default MessagesSpace
