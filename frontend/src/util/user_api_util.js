import axios from 'axios';

export const getUser = (id) => {
  return axios.get(`/api/users/${id}`)
}