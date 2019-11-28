import axios from "axios";

export const createLike = (like) => {
  return axios.post(`/api/likes/create/${like.videoId}`, like)
}

export const deleteLike = (videoId, userId) => {
  return axios.delete(`/api/likes/delete/${videoId}`)
}

export const fetchLikes = videoId => {
  return axios.get(`/api/likes/get/${videoId}`)
}

export const updateLikes = (like) => {
  return axios.patch(`/api/likes/${like.videoId}`, like)
}