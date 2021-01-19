import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
} from '../../../redux/friendsReducer'
import FriendsPage from './FriendsPage'
import Preloader from '../../Common/Preloader/Preloader'
import { usersAPI } from '../../../api/api'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

class FriendsPageContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  getFriends = () => {
    if (this.props.users.length === 0) {
      usersAPI
        .getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
        })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingInProgress: state.friendsPage.followingInProgress,
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
  }),
  // withAuthRedirect
)(FriendsPageContainer)
