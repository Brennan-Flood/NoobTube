const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');

router.get('/video/:video_id', (req, res) => {
  Comment.find({ video: req.params.video_id})
    .then(comments => {
      res.json(comments);
    })
    .catch(err => 
      res.status(404).json({ nocommentsfound: 'No comments for this video'})
    );
});

router.post('/', 
  passport.authenticate('jwt', { session: false}),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      text: req.body.text, 
      user: req.user,
      video: req.body.video,
      date: req.body.date
    });

    newComment.save().then(comment => res.json(comment));
  }
); 

module.exports = router;