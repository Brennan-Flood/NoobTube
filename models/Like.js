const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const LikeSchema = new Schema({
  userId: {
    type: String,
    ref: 'users'
  },

  videoId: {
    type: String,
    ref: 'videos'
  },

  liked: {
    type: Boolean,

  }
  
});

module.exports = Like = mongoose.model('like', LikeSchema);