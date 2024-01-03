import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
})

export const getUsers = (page = 1, count = 6) => {
  return API.get(`/users?page=${page}&count=${count}`).then((res) => res.data)
}
