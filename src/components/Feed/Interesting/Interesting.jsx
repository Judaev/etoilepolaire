import React from 'react'
import style from './Interesting.module.css'
import InterestingItem from './InterestingItem/InterestingItem'

const Interesting = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Interesting</div>
      <div className={style.items}>
        <InterestingItem />
        <InterestingItem />
        <InterestingItem />
      </div>
    </div>
  )
}

export default Interesting