import axios from "axios";

export const createLike = videoId => {
  return axios.post(`/api/likes/video/${videoId}`, videoId)
}

export const deleteLike = id => {
  return axios.delete(`/api/likes/${id}`)
}

export const fetchLikes = videoId => {
  return axios.get(`/api/likes/video/${videoId}`)
}

export const updateLikes = videoId => {
  return axios.patch(`/api/likes/video/${videoId}`)
}