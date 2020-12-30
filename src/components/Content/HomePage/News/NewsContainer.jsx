import React from 'react'
import { connect } from 'react-redux'
import { setNewsAC } from '../../../../redux/newsReducer'
import News from './News'

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setNews: (news) => {
      dispatch(setNewsAC(news))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (News)