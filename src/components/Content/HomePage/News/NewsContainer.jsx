import React from 'react'
import { connect } from 'react-redux'
import { setNewsAC } from '../../../../redux/newsReducer'
import NewsC from './NewsC'

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    visible: state.newsPage.visible
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setNews: (news) => {
      dispatch(setNewsAC(news))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewsC)