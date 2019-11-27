const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const LikeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  videoId: {
    type: Schema.Types.ObjectId,
    ref: 'videos'
  },

  liked: {
    type: Boolean,

  }
  
});

module.exports = Like = mongoose.model('like', LikeSchema);