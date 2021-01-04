import * as axios from 'axios'
import React from 'react'
import style from './News.module.css'

class NewsC extends React.Component {
  componentDidMount() {
    axios
      .get(
        'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5792621ee47f4d679b54fa8cef10ad46'
      )
      .then((response) => {
        this.props.setNews(response.data.articles)
      })
  }

  getNews = () => {
    if (this.props.news.length === 0) {
      axios
        .get(
          'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5792621ee47f4d679b54fa8cef10ad46'
        )
        .then((response) => {
          this.props.setNews(response.data.articles)
        })
    }
  }

  render() {
    return (
      <div className={style.main}>
        <div className={style.title}>Новости</div>
        {/* <button onClick={getNews}>Обновить</button> */}
        <button onClick={() => this.getNews()}>Обновить</button>
        {this.props.news.map((u) => (
          <div className={style.item} key={u.source.id}>
            <span className={style.item__header}>
              <div onClick={() => u.url} className={style.item__title}>
                {u.title}
              </div>
              <div className={style.item__published}>{u.publishedAt}</div>
            </span>
            <div className={style.item__author}>{u.author}</div> 
            <span>
              <div>{u.description}</div>
            </span>
            <span>
              <img className={style.item__image} src={u.urlToImage} />
              <div className={style.item__footer}>{u.content}</div>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default NewsC
