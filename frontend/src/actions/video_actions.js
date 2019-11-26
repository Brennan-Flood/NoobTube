import { getVideos, getUserVideos, postVideo, getVideo } from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_USER_VIDEOS = 'RECEIVE_USER_VIDEOS';
export const RECEIVE_NEW_VIDEO = 'RECEIVE_NEW_VIDEO';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS, 
  videos
});

export const receiveUserVideos = videos => ({
  type: RECEIVE_USER_VIDEOS,
  videos
});

export const receiveNewVideo = video => ({
  type: RECEIVE_NEW_VIDEO, 
  video
})

export const fetchVideos = () => dispatch => (
  getVideos()
    .then(videos => dispatch(receiveVideos(videos)))
    .catch(err => console.log(err))
);

export const fetchVideo = (videoId) => dispatch => (
  getVideo(videoId)
  .then(video => dispatch(receiveNewVideo(video)))
  .catch(err => console.log(err))
)

export const fetchUserVideos = id => dispatch => (
  getUserVideos(id)
    .then(videos => dispatch(receiveUserVideos(videos)))
    .catch(err => console.log(err))
);

export const createVideo = data => dispatch => (
  postVideo(data)
    .then(video => dispatch(receiveNewVideo(video)))
    .catch(err => console.log(err))
);