const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const VideoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  link: {
    type: String,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String, 
    required: true
  },
  author: {
    type: String, 
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  // comments: {
    
  // },
  // likes: {
  //   type: Integer,
  // }, 
  // dislikes: {
  //   type: Integer
  // }
});

module.exports = Video = mongoose.model('video', VideoSchema);