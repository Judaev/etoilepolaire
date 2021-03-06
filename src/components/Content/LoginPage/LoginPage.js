import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import {
  maxLengthCreator,
  requiredField,
} from '../../../utils/validators/validators'
import {
  
  createField,
  LoginInput,
} from '../../Common/FormsControls/FormsControls'
import { login } from '../../../redux/authReducer'
import style from './LoginPage.module.css'
import { Redirect } from 'react-router-dom'

const LoginPage = (props) => {
  const onSubmit = (FormData) => {
    props.login(FormData.email, FormData.password, FormData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to="/home" />
  }

  return (
    <div>
      <div className={style.main}>
        <div className={style.title}>Login</div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      {createField('Почта', 'email', [requiredField], LoginInput)}
      {createField('Пароль', 'password', [requiredField], LoginInput, {
        type: 'password',
      })}
      {createField(
        null,
        'rememberMe',
        [],
        LoginInput,
        { type: 'checkbox' },
        'запомнить меня'
      )}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(LoginPage)
