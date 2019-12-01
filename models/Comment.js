const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  video: {
    type: Schema.Types.ObjectId, 
    ref: 'videos'
  }, 
  text: {
    type: String, 
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);