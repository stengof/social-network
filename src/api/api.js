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
  baseURL,
  withCredentials: true,
  headers: {
    "API-KEY": "0686b2f7-3a97-46bd-9391-975f8d00b933"
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
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return auth.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },
  saveProfile(profile) {
    return auth.put('profile', profile)
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

