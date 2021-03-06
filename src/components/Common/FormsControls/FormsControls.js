import React from 'react'
import { Field } from 'redux-form'
import style from './FormsControls.module.css'

const FormControl = (props) => {}

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
  const showError = error && touched

  return (
    <div className={style.form__control + ' ' + (showError ? style.error : '')}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {showError && <span>{error}</span>}
    </div>
  )
}

export const LoginInput = ({ input, meta, ...props }) => {
  const showError = meta.error && meta.touched

  return (
    <div
      className={style.input__control + ' ' + (showError ? style.error : '')}
    >
      {showError && <span>{meta.error}</span>}
      <div>
        <input {...input} {...props} />
      </div>
    </div>
  )
}
export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ''
) => {
  return (
    <div>
      <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />
      {text}
    </div>
  )
}
