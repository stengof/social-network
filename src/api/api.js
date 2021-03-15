import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const base = axios.create({
  baseURL
})

const withCredentials = axios.create({
  baseURL,
  withCredentials: true
})

const auth = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "589d610b-3a89-4024-a191-95da5ab1df45"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return withCredentials.get(`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => response.data);
  },
  unfollow(userId) {
    return auth.delete(`follow/${userId}`)
      .then(response => response.data);
  },
  follow(userId) {
    return auth.post(`follow/${userId}`, {},)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return base.get(`profile/${userId}`)
      .then(response => response.data);
  },
  getUserStatus(userId) {
    return base.get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  updateUserStatus(status) {
    return auth.put('profile/status', {status})
      .then(response => response.data)
  }
}

export const authAPI = {
  getAuth() {
    return withCredentials.get(`auth/me`)
      .then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return auth.post('auth/login', {email, password, rememberMe})
      .then(response => response.data)
  },
  logout() {
    return auth.delete('auth/login')
      .then(response => response.data)
  }

}

