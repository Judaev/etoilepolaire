import React from 'react'
import style from './AdviceBlock.module.css'

const AdviceBlock = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>
        Советы
      </div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
}

export default AdviceBlock