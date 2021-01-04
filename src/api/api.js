import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '971078f2-8352-4635-929c-1c7ddc8341c5',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    )
  },
}

export const authAPI = {
  me() {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/auth/me`,
      {
        withCredentials: true,
      }
    )
  },
}
