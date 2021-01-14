import * as axios from 'axios'
import React from 'react'
import style from './News.module.css'

const News = (props) => {

  let getNews = () => {
    if (props.news.length === 0) {
      axios.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5792621ee47f4d679b54fa8cef10ad46').then(response => {
        props.setNews(response.data.articles)
      })
    }  
  }

  

  return (
    <div className={style.main}>
      <div className={style.title}>Новости</div>
      { props.news.map(u => <div className={style.item} key={u.source.id}>
          <span>
            <div onClick={() => u.url} className={style.item__title}>{u.title}</div>
            <div className={style.item__author}>{u.author}</div>
            <div className={style.item__published}>{u.publishedAt}</div>
          </span>
          <span>
            <div>{u.description}</div>
          </span>
          <span>
            <img className={style.item__image} src={u.urlToImage} />
            <div className={style.item__footer}>{u.content}</div>
          </span>
        </div>) }
    </div>
  )
}

export default News