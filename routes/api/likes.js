const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Like = require('../../models/Like');
const validateLikeInput = require('../../validation/likes');


router.post('/create/:video_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newLike = new Like({
      userId: req.body.userId,
      videoId: req.body.videoId,
      liked: req.body.liked
    });

    newLike.save().then(like => res.json(like))
  }
)

router.patch('/:video_id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  let like = Like.find({ userId: req.userId, videoId: req.params.video_id })

    like.update({ liked: req.liked }).then(like => res.json(like)) 

  }
})

router.get('/get/:video_id', (req, res) => {
  Like.find({videoId: req.params.video_id})
    .then(likes => res.json(likes))
    .catch(err => res.status(404).json({ nolikesfound: 'No likes found' }));
})

router.delete('/delete/:video_id', (req, res) => {
  Like.find({userId: req.userId, videoId: req.params.video_id})
    .remove();
})

module.exports = router;