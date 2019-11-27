import axios from 'axios';

export const fetchComments = (videoId) => {
  return axios.get(`/api/comments/video/${videoId}`)
}

export const createComment = (comment) => {
  return axios.post(`/api/comments/`, comment)
}