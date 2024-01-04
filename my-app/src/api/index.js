import axios from 'axios'

const token = localStorage.getItem('token')

export const API = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
})

export const getUsers = (page = 1, count = 6) => {
  return API.get(`/users?page=${page}&count=${count}`).then((res) => res.data)
}

export const getPositions = () => {
  return API.get('/positions').then((res) => res.data)
}

export const getToken = () => {
  return API.get('/token').then((res) => res.data)
}

export const postUser = async (values) => {
  const formData = new FormData()
  Object.keys(values).forEach((e) => formData.append(e, values[e]))
  const data = await API.post('/users', formData, {
    headers: {
      Token: token,
    },
  })

  return data
}
