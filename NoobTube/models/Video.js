const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const VideoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  link: {
    type: string,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: string, 
    required: true
  },
  duration: {
    type: string,
    required: true
  },
  // comments: {
  //   ... ? 
  // },
  likes: {
    type: integer
  }, 
  dislikes: {
    type: integer
  }
});

module.exports = Video = mongoose.model('video', VideoSchema);