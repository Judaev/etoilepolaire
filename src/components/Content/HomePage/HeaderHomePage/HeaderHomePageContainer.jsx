import React from 'react'
import style from './HeaderHomePage.module.css'
import ModalCreatePost from './ModalCreatePost/ModalCreatePost'

class HeaderHomePageContainer extends React.Component {
  state = {
    showModal: false
  }

  onShowModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideShowModal = () => {
    this.setState({
      showModal: false
    })
  }

  // addNewChange = () => {
  //   let value = newPostElement.current.value
  //   return alert(value)
  // }

  render() {
    return(
      <HeaderHomePage state={this.state} onShowModal={this.onShowModal} hideShowModal={this.hideShowModal} />
    )
  }
}

const HeaderHomePage = (props) => {

  let newPostElement = React.createRef()

  let addNewChange = () => {
    let value = newPostElement.current.value
    return alert(value)
  }

  return (
    <div className={style.main}>
      <div className={style.find}>
        <div>
          <input className={style.input} ref={newPostElement} type="text" placeholder='Введите текст...'/>  
        </div>
        <div>
          <button className={style.button} type='button' onClick={ addNewChange}>Найти</button>
        </div>
      </div>
      <div>
        <button className={style.addPost} type='button' onClick={props.onShowModal}>Создать запись</button>
      </div>
      { props.state.showModal && <ModalCreatePost hideShowModal={props.hideShowModal} /> }  
    </div>
  )
}

export default HeaderHomePageContainer