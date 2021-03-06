import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from '../../../redux/friendsReducer'
import FriendsPage from './FriendsPage'
import Preloader from '../../Common/Preloader/Preloader'
import { usersAPI } from '../../../api/api'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../../redux/friendsSelectors'

class FriendsPageContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  getFriends = () => {
    const {currentPage, pageSize} = this.props

    if (this.props.users.length === 0) {
      usersAPI
        .requestUsers(currentPage, pageSize)
        .then((data) => {
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
        })
    }
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props

    this.props.requestUsers(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <FriendsPage
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          getFriends={this.getFriends}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  }),
  withAuthRedirect
)(FriendsPageContainer)
