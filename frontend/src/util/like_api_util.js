import axios from "axios";

export const createLike = videoId => {
  return axios.post(`/api/video/${videoId}`, videoId)
}

export const deleteLike = id => {
  return axios.delete(`/api/likes/${id}`)
}