import axios from 'axios';

export const getVideos = () => {
  return axios.get('/api/videos')
};

export const getUserVideos = id => {
  return axios.get(`/api/videos/user/${id}`)
};

export const postVideo = data => {
  return axios.post('/api/videos/', data)
};

export const getVideo = (id) => {
  return axios.get(`/api/videos/${id}`)
};

export const deleteVideo = id => {
  return axios.delete(`/api/videos/${id}`)
}


// import axios from 'axios';

// export const getTweets = () => {
//   return axios.get('/api/tweets')
// };

// export const getUserTweets = id => {
//   return axios.get(`/api/tweets/user/${id}`)
// };

// export const writeTweet = data => {
//   return axios.post('/api/tweets/', data)
// }